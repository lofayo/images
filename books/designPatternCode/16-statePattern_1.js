/*
 * @Author: 罗方勇
 * @Description: 电灯类：创建电灯开关的初始工作、维护电灯状态的切换
 * @Date: 2020-10-19 10:24:57
 * @LastEditTime: 2020-10-21 09:49:32
 */

class Light {
    constructor() {
        this.state = 'off';
        this.button = null;
    }
    init = ()=> {
        const button = document.createElement('button');
        button.textContent = 'off';

        this.button = document.body.appendChild(button);
        this.button.onclick = () => {
            this.buttonWasPressed();
        }
    }
    buttonWasPressed = ()=> {
        if(this.state === 'off') {
            console.log('the light is on');
            this.state = 'on';
            this.button.textContent = 'on';
            this.button.style.backgroundColor = 'yellow';
        } else if(this.state === 'on') {
            console.log('the light is off');
            this.state = 'off';
            this.button.textContent = 'off';
            this.button.style.backgroundColor = '#cccccc';
        }
    }
}
export default Light;