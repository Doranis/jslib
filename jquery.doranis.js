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
    $.doranis.loader = {loaded: 0, total: 0}

    /**
     * Doranis Library Loader
     * @param f Filename
     * @param v Version
     * @param opt Options
     */
    $.doranis.ensure = function(f, v, opt){
        opt = $.extend({success: function(){}, fail: function(){}, complete: function(){}}, f == typeof object ? v : opt);
        $.doranis.loader.total = 1;
        $.doranis.loader.loaded = 0;

        if('object' == typeof f){
            $.doranis.loader.total = f.length;
            $.each(f, function(index, el){
                $.getScript('https://rawgit.com/Doranis/jslib/master/'+el.file+'/'+el.version+'/jquery.doranis.'+el.file+'.js')
                    .done(function(){
                        $.doranis.loader.loaded++;
                        if($.doranis.loader.loaded >= $.doranis.loader.total) opt.complete();
                        opt.success(el);
                    })
                    .fail(function(){
                        $.doranis.loader.loaded++;
                        if($.doranis.loader.loaded >= $.doranis.loader.total) opt.complete();
                        opt.fail(el);
                    });
            });
        }
        else
            $.getScript('https://rawgit.com/Doranis/jslib/master/'+f+'/'+v+'/jquery.doranis.'+f+'.js')
                .done(opt.success)
                .fail(opt.fail);
    }
})(jQuery);