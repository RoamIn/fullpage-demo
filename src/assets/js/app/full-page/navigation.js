/**
 * 侧边导航栏
 * @module
 */

define(function (require, exports, module) {
    function initSlider () {
		var navigation = new Sidebar({
			wrapper: '#J_Navigation', // 必填,选择器
			width: 210,
			height: 472,

			// 设置内容宽度，决定浮窗显示的位置，
			// 默认为0，则直接靠左或者靠右
			// 否则，靠近内容边缘
			pageContentWidth: 0,

			// 距离左边或者右边边缘的距离(数值)
			// 带票position的第一个参数"left"或者"right"使用
			lrDistance: 0,
			// 距离上边或者下边边缘的距离(数值)
			// 搭配position的第二个参数为"top"或者"bottom"使用

			// 必须设置两个参数：
			// 第一个参数可赋值"left"或者"right"
			// 第二个参数可赋值"top"或者"bottom"或者"middle"
			// 默认["right","mid"]
			position:['right', 'middle'],

			// 滚动到距离顶部200时显示(数值)
			scrollTopShow: 0
		});
	}
	function bind () {
		$(window).resize(function () {
			initSlider();
		});
	}

    function init() {
        bind();
		initSlider();
    }

    module.exports = {
        init: init
    };
});