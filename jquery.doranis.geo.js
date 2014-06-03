/**
 * Doranis JSLIB
 * Doranis.Geo | Tuesday, June 3, 2014
 * @author Pezhvak IMV (pezhvakimv@gmail.com)
 * @package doranis
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