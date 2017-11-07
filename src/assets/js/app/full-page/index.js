/**
 * 全屏滚动插件入口
 * @module
 */

define(function (require, exports, module) {
    var page = require('./page');
    var navigation = require('./navigation');

    /**
     * 初始化
     */
    function init() {
        page.init();
        navigation.init();
    }

    module.exports = {
        /**
         * 初始化
         */
        init: init
    };
});