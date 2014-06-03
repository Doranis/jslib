/**
 * Doranis GEO
 * Doranis.Geo | Tuesday, June 3, 2014
 * @author Pezhvak IMV (pezhvakimv@gmail.com)
 * @package doranis
 * @version 1.0
 **/
(function($){
    $.doranis.geo = {}
    $.doranis.geo.isSupported = function(){
        return navigator.geolocation ? true : false;
    }

    /**
     * Locate user by getting latitude and longitude
     * @param opts Callbacks
     */
    $.doranis.geo.locate = function(opts){
        opts = $.extend({process: function(data){}, decline: function(error){}}, opts);
        if(!$.doranis.geo.isSupported()) $opts.decline('geolocation is not supported by your browser, please update your browser now!');
        else
            navigator.geolocation.getCurrentPosition(opts.process, opts.decline);
    }

    /**
     * Convert Latitude and longitude into address detail
     * @param lat Latitude (or locate result)
     * @param lng Longitude (omit if locate result set for lat)
     * @param success callback(detail)
     */
    $.doranis.geo.latlng2detail = function(lat, lng, success){
        // Convert $.doranis.geo.locate result into lat, lng
        if(isNaN(success) && lat.coords){
            success = lng;
            lng = lat.coords.longitude;
            lat = lat.coords.latitude;
        }

        $.getJSON('http://maps.google.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=false', function(detail){
            success(detail);
        });
    }

    /**
     * Detect user location and return simplified address object
     * @param opts Callbacks
     */
    $.doranis.geo.detect = function(opts){
        opts = $.extend({success: function(data){}, decline: function(error){}}, opts);

        $.doranis.geo.locate({process: function(data){
            $.doranis.geo.latlng2detail(data, function(info){
                var geo = {}
                for(var i =0; i < info.results.length; i++){
                    result = info.results[i];
                    var t = result.types[0];
                    geo[t] = {}
                    geo[t]['address'] = result.formatted_address;
                    for(var ii = 0 ; ii < result.address_components.length; ii++){
                        ac = result.address_components[ii];
                        geo[t][ac.types[0]] = ac.long_name;
                    }
                }

                opts.success(geo);
            });
        }, decline: opts.decline});
    }
})(jQuery);