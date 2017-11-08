/**
 * 侧边导航栏
 * @module
 */

define(function (require, exports, module) {
    function init() {

        if (typeof $.plax !== 'undefined') {
            $('.J_Plax').plaxify();
            $.plax.enable();
        }
    }

    module.exports = {
        init: init
    };
});