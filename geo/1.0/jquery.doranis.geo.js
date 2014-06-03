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

    $.doranis.geo.detectGeoLocation = function(opt){
        //$.extend({on}, opt);
    }
})(jQuery);