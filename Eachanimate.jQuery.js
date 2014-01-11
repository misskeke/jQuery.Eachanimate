/** Eachanimate_jQueryPlugin
 *  Author: dorab_org->dorabar->Wangyingmao
 *  Needed: jQuery jQuery_UI jQuery_Transit(plugin)*/
(function ($) {
    /**function $().eachanimate:
     * 对每个子元素应用动画
     * Args:
     * animates: [object] 动画属性表
     * usetransit: [Boolen] 是否是transit插件的动画表
     * spend: [Number] 动画的速度
     * eachdelay: [Number] 从前一个元素开始执行动画到下一个元素开始执行动画的延时，如果为0则为spend
     * rondom: [Boolen] 指定是按随机次序（"true"）还是按jQuery列表次序（"false"）
     * essing [Number] 指定缓冲
     * alldone [function] 全部执行完毕后调用*/
    $.fn.eachanimate = function (animates, usetransit, spend, eachdelay, rondom, essing, alldone) {
        var elearr = this.toArray();
        if (rondom) {
            elearr.sort(function () {
                return Math.random() > 0.75 ? -1 : 1;
            });
        }
        for (var i = 0; i < elearr.length; i++) {
            var l = (i == elearr.length - 1);
            var n = i;
            (function (noi, islast) {
                setTimeout(function () {
                    var $ele = $(elearr[noi]);
                    if (usetransit) {
                        $ele.transit(animates, spend, essing, function () {
                            if (islast) {
                                alldone.call($(elearr));
                            }
                        });
                    } else {
                        $ele.animate(animates, spend, essing, function () {
                            if (islast) {
                                alldone.call($(elearr));
                            }
                        });
                    }
                }, i * (eachdelay == 0 ? spend : eachdelay));
            })(n, l);
        }
    }
})(jQuery);