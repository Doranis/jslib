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

    $.doranis.geo.detect = function(opts){
        opts = $.extend({process: function(data){}, decline: function(error){}}, opts);
        if(!$.doranis.geo.isSupported()) $opts.decline('geolocation is not supported by your browser, please update your browser now!');
        else
            navigator.geolocation.getCurrentPosition(opts.process, opts.decline);
    }
})(jQuery);