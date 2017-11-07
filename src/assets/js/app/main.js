/**
 * @file VIP 介绍页入口文件
 * @author live
 */

define(function (require) {
    var fullPage = require('./full-page/index');

    var page0 = require('./page-0/index');

    /**
     * 初始化
     */
    function init() {
        fullPage.init();

        page0.init();
    }

    init();
});
