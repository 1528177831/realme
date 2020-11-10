//多物体多样式的运动   startMove(this, "width", 300);
function startMove(node, cssObj, complete){ //complete = show;
    clearInterval(node.timer);
    node.timer = setInterval(function(){
        
        var isEnd = true; //假设所有动画都都到达目的值

        for(var attr in cssObj){
            //取出当前css样式的目的值
            var iTarget = cssObj[attr];
            //1、获取当前值
            var iCur = null;

            if(attr == "opacity"){
                iCur = parseInt(parseFloat(getStyle(node, "opacity")) * 100);
            }else{
                iCur = parseInt(getStyle(node, attr))
            }
            //2、计算速度
            var speed = (iTarget - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(attr == "opacity"){
                iCur += speed;
                node.style.opacity = iCur / 100;
                node.style.filter = `alpha(opacity=${iCur})`;

            }else{
                node.style[attr] = iCur + speed + 'px';
            }
            
            //当前值是否瞪目目的值
            if(iCur != iTarget){
                isEnd = false;
            }
        }
        

        if(isEnd){
            //说明都到达目的值
            clearInterval(node.timer);
           
            if(complete){
                complete.call(node);
            }
        }
    }, 30);
}

/*
    node  元素节点
    cssStyle  获取css样式类型
*/
function getStyle(node, cssStyle){
    if(node.currentStyle){
        return node.css[cssStyle];
    }else{
        return getComputedStyle(node)[cssStyle];
    }
}