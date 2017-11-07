/**
 * 第3屏
 * @module
 */

define(function (require, exports, module) {
	var flash = require('./flash');
	var plax = require('./plax');

    /**
     * 初始化
     */
    function init() {
        flash.init();
		plax.init();
    }

    module.exports = {
        /**
         * 初始化
         */
        init: init
    };
});