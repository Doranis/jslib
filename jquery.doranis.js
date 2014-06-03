/**
 * Doranis JSLIB Loader
 * Doranis | Tuesday, June 3, 2014
 * @author Pezhvak IMV (pezhvakimv@gmail.com)
 * @package doranis
 **/
(function($){
    /**
     * initiating doranis class
     */
    $.doranis = {}

    /**
     * Doranis Library Loader
     * @param f Filename
     * @param v Version
     * @param opt Options
     */
    $.doranis.ensure = function(f, v, opt){
        opt = $.extend({success: function(){}, fail: function(){}}, opt);
        $.getScript('https://rawgit.com/Doranis/jslib/master/geo/'+v+'/jquery.doranis.'+f+'.js')
            .done(opt.success)
            .fail(opt.fail);
    }
})(jQuery);