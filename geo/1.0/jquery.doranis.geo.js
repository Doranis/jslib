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
     * @param opts Event Functions
     */
    $.doranis.geo.locate = function(opts){
        opts = $.extend({process: function(data){}, decline: function(error){}}, opts);
        if(!$.doranis.geo.isSupported()) $opts.decline('geolocation is not supported by your browser, please update your browser now!');
        else
            navigator.geolocation.getCurrentPosition(opts.process, opts.decline);
    }

    $.doranis.geo.fetchInfo = function(data, success){
        $.getJSON('http://maps.google.com/maps/api/geocode/json?latlng='+data.coords.latitude+','+data.coords.longitude+'&sensor=false', function(detail){
            success(detail);
        });
    }
})(jQuery);