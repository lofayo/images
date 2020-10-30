/*
 * @Author: 罗方勇
 * @Description: 电灯类：创建初始开关、将切换的不同状态分布到不同状态类中
 * @Date: 2020-10-21 09:47:34
 * @LastEditTime: 2020-10-21 10:28:57
 */

// 电灯类
class Light {
    constructor() {
        this.offStateLight = new OffStateLight(this);
        this.weakStateLight = new WeakStateLight(this);
        this.strongStateLight = new StrongStateLight(this);
        this.button = null;

    }
    init = ()=> {
        // 初始化button开关
        const button = document.createElement('button');
        button.textContent = '开关';
        this.button = document.body.appendChild(button);

        this.curState = this.offStateLight;
        this.setButton('off', '#111');
        // 开关的点击
        this.button.onclick = () => {
            this.curState.buttonWasPressed();
        }
    }
    // 设置开关状态
    setState = (state) => {
        this.curState = state;
    }
    // 设置开关按钮的相关属性：文本、背景色
    setButton = (text, bgColor) => {
        this.button.textContent = text;
        this.button.style.backgroundColor = bgColor;
    }
}
class OffStateLight {
    constructor(light) {
        this.light = light;
    }
    buttonWasPressed = () => {
        console.log('weak light');
        this.light.setState(this.light.weakStateLight);
        this.light.setButton('weak light', '#333');
    }
}

class WeakStateLight {
    constructor(light) {
        this.light = light;
    }
    buttonWasPressed = () => {
        console.log('strong light');
        this.light.setState(this.light.strongStateLight);
        this.light.setButton('strong light', '#666');
    }
}

class StrongStateLight {
    constructor(light) {
        this.light = light;
    }
    buttonWasPressed = () => {
        console.log('off');
        this.light.setState(this.light.offStateLight);
        this.light.setButton('off', '#111');
    }
}
export default Light;