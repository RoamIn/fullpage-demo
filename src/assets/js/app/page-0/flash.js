/**
 * 首屏 flash
 * @module
 */

define(function (require, exports, module) {
    var $flash = $('#J_Flash');
    var IS_IE6 = isIE67() === 6;
    var IS_IE67 = IS_IE6 || isIE67() === 7;
    
    function isIE67() {
        var isIE = navigator.userAgent.indexOf('MSIE') > 0;

        if (!isIE) {
            return 0;
        }

        if (navigator.userAgent.indexOf('MSIE 6.0') > 0 || (typeof(document.body.style.maxHeight) === 'undefined')) {
            return 6;
        }

        if (document.all && !document.querySelector) {
            return 7;
        }

        return 0;
    }

    /**
     * 调整 flash 大小
     */
    function resizeFlash() {
        var w = IS_IE6 ? 0 : -(parseInt((1920 - $(window).width()) / 2) - 10);
        var h = IS_IE67 ? 0 : -(parseInt((1080 - ($(window).height())) / 2) - 1);

        $flash.css({'top': h + 'px', 'left': w + 'px'});
    }

    /**
     * 事件绑定
     */
    function bind () {
        $(window).resize(function () {
            resizeFlash();
        });
    }

    /**
     * 显示 flash
     */
    function show() {
        setTimeout(function () {
            $flash.css('display', 'inline-block');
        }, 0);
    }

    /**
     * 初始化
     */
    function init() {
        bind();
        show();
        resizeFlash();
    }

    module.exports = {
        /**
         * 初始化
         */
        init: init
    };
});