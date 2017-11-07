;(function ($) {
    "use strict";
    $.fn.slider = function (opts) {
		var o = $.extend({
            speed:500,//速度
			delay:3000,//间隔
			dot:true,//出现圆点
			min:1,//最小数量
			prev:'.prev',
			next:'.next',
			items: '>ul',
			item: '>li',
			autoplay: true,   //是否自动播放
			complete:false
		},opts);
        return this.each(function () {
			var _ = $(this),
			s={};
			function init(){
				s.ul = _.find(o.items);
				s.li = s.ul.find(o.item);
				s.liLen = s.li.length;
				if(s.liLen <= o.min){return;}
				s.timer =null;
				s.index = 0;
				dot();
				play();
			}
			function dot(){
				var html='',i;
				if(!o.dot){
					return;
				}
				for (i = 1; i <= s.liLen; i++) {
					if(i == 1){
						html += '<li class="active">'+i+'</li>';
					}else{
						html += '<li>'+i+'</li>';
					}

				}
				_.append('<ol>'+html+'</ol>');
				_.find('ol li').unbind().on('mouseenter',function(){
					to(parseInt($(this).html())-1);
				});
			}
			function stop(){
				s.li.stop(true, true);
				window.clearTimeout(s.timer);
			}
			function to(n){
				var p;
				p=n-s.index;
				/*if(p <= 0){
					p=1;
				}*/
				stop();
				s.index = n;
				autoPlay();
			}
			function autoPlay() {
				s.li.stop(true, true);
				s.li.eq(s.index).css({"z-index": 9 }).siblings().css({"z-index": 1});
				s.li.eq(s.index).animate({opacity:1}, o.speed,function(){
					s.li.eq(s.index).siblings().css({'opacity':0});
					if (s.index >= s.liLen-1) {
						s.index = -1;
						if(o.dot){
							_.find("ol li").eq(s.index).addClass("active").siblings().removeClass("active");
						}
					}
					if($.isFunction(o.complete)){
						o.complete(s.index);
					}
					play();
				});
				if(o.dot){
					_.find("ol li").eq(s.index).addClass("active").siblings().removeClass("active");
				}
			}

			function play() {
				if(!o.autoplay){
					return;
				}
				s.timer = window.setTimeout(function () {
					s.index += 1;
					autoPlay();
				}, o.delay);
			}
			init();
			_.slider.initParm=function(){
					s.index = 0;
			};
		});
    };
})(jQuery);
