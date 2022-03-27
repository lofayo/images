class Link {
    constructor() {
        this.data = null;
        this.tail = null;
    }
    push(value) {
        if(!this.data) {
            const pushElement = {value, next: null};
            this.data = pushElement;
            this.tail = pushElement;
        } else {
            this.tail.next = {
                value,
                next: null
            }
        }
    }
    pop() {
        if(!this.data) {
            return null;
        }
        const popElement = {value: this.data.value, next: null};
        this.data = this.data.next;
        return popElement;
    }
}

const link = new Link();
link.push('fofo');
link.push('lofayo');
link.push('luofangyong');

console.log(link);