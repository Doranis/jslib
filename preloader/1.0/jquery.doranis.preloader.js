/**
 * Doranis Preloader
 * Doranis.preloader | Monday, June 16, 2014
 * @author Pezhvak IMV (pezhvakimv@gmail.com)
 * @package doranis
 * @version 1.0
 **/
(function($){
    $.doranis.preloader = {}

    $.doranis.preloader.preload = function (opts)
    {
        opts = $.extend({collection: [], progress: function(opts){}, complete: function(opts){}, fail: function(opts){}}, opts);
        var loaded = new Array();

        $.each(opts.collection,function(i, entry)
        {
            var img = new Image();
            var url = '';
            var img_obj = img;
            var title = '';

            if ('object' != typeof entry)
            {
                url = $(entry).attr('src') || $(entry).css('background-image').replace(/^url\((?:"|')?(.*)(?:'|")?\)$/mg, "$1");
                img_obj = entry;
            }
            else{
                url = entry.url;
                title = entry.title;
            }

            $(img).bind('load error', function(e)
            {
                loaded.push(img_obj);
                $.data(img_obj, 'loaded', ('error'==e.type)?false:true);
                if('error'==e.type)
                    opts.fail({title: title, total: opts.collection.length, loaded: loaded.length, percentage: (100/opts.collection.length) * loaded.length, url: url, object: img_obj});
                else
                    opts.progress({title: title, total: opts.collection.length, loaded: loaded.length, percentage: (100/opts.collection.length) * loaded.length, url: url, object: img_obj});

                if (loaded.length>=opts.collection.length)
                    opts.complete({loaded: loaded});

                $(this).unbind('load error');
            });

            img.src = url;
        });
    };

    $.fn.preload = function(opts)
    {
        opts = $.extend(opts, {collection:[this]});
        $.doranis.preloader.preload(opts);

        // continue chaining
        return this;
    };
})(jQuery);