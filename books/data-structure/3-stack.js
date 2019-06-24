class Stack {
    constructor() {
        this.dataSource = [];
        this.top = -1;
    }
    push(element) {
        this.dataSource[++this.top] = element;
        return true;
    }
    pop() {
        // 根本就不能这样，神经病！！！
        this.top--;
    }
    peak() {
        // 函数方法里该是return还是return，不能因为图打印方便就console.log，因为真正的函数调用是为了拿到值，而不仅仅是打印
        return this.top > -1 ? this.dataSource[this.top] : 'empty stack';
    }
}

let stack = new Stack();
stack.push('fofo');
stack.push('lofayo');
stack.pop();
stack.pop();
stack.pop();

console.log(stack, stack.peak());