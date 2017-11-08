/**
 * 页面滚屏
 * @module
 */

define(function (require, exports, module) {
    function init() {
        $('#J_FullPage').fullpage({
            menu: '#J_Menu',

            // 导航条
            anchors: ['page-anchor-0', 'page-anchor-1', 'page-anchor-2', 'page-anchor-3', 'page-anchor-4'], // 锚点链接

            sectionSelector: '.page',

            lazyLoading: true,

            recordHistory: false,

            scrollOverflow: true,


            afterLoad: function (anchorLink, index) {

            },
            onLeave: function (index, nextIndex, direction) {

            }
        });
    }

    module.exports = {
        /**
         * 初始化
         */
        init: init
    };
});
