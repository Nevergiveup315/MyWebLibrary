/**
 *滑动事件
 */
let touchEvent = function () {
    
    if(!!self.touch) self.slider.addEventListener('touchstart',self.events,false);
    
    //定义touchstart的事件处理函数
    
    start(event){
    
    　　var touch
    = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    
    　　startPos =
    {x:touch.pageX,y:touch.pageY,time:+new Date}; //取第一个touch的坐标值
    
    　　isScrolling
    = 0; //这个参数判断是垂直滚动还是水平滚动
    
    　　this.slider.addEventListener('touchmove',this,false);
    
    　　this.slider.addEventListener('touchend',this,false);
    
    }
}

export default touchEvent;