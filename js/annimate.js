/**
 * Created by wuyan on 2017/5/12.
 */
//��ȡԪ�صĺ���
function getStyle(element,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
function $id(id) {
    return document.getElementById(id);
}
//���嶯������
function animate6(element,obj,callback){
    clearInterval(element.timer);
    element.timer=setInterval(function () {
        var flag = true;
        for(var attr in obj){
            if(attr =="opacity"){
                //Ϊ����͸���ȸ����׵ļ��㣬���Ƕ��Ŵ�100�����бȽϺ��ٽ��бȽ�
                var target  = Math.floor(obj[attr]*100);
                var current = Math.floor(parseFloat(getStyle(element,attr))*100);
                //�жϷ����ͬʱ���Ѳ����𽥼��٣�
                var step = (target-current)/10;
                //�жϷ���֮��Ҫ���ݷ������ȡ����Ϊ�˱�֤����Ŀ�꣬��������������򣬾�����ȡ����-1����������������򣬾ͱ���ȡ����1��
                step = target>current?Math.ceil(step):Math.floor(step);
                //ÿһ���ı仯
                current+=step;
            //    ���¸�ֵ
                element.style[attr] = current/100;
            }else if(attr=="zIndex"){
                var target = obj[attr];
                element.style[attr] = target;
            }else{
                var target = obj[attr];
                var current = parseFloat(getStyle(element,attr));
                var step = (target - current) / 5;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if(current!=target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(element.timer);
            callback&&callback();
        }
    },20)
}