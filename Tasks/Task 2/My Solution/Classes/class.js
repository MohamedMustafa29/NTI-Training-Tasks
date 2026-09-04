export class Shapes {
    constructor(w, h) { 
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return (this.height + this.width) * 2;
    }

    toString() {
        return `Area of ${this.constructor.name} is ${this.area().toFixed(2)} and Perimeter is ${this.perimeter().toFixed(2)}`;
    }
}

export class Rect extends Shapes {
    static count = 0;

    constructor(w, h) {
        super(w, h);
        Rect.count++;
    }

    static displayCount() {
        return Rect.count;
    }
}

export class Square extends Shapes {
    constructor(l) {
        super(l, l);
    }
}

export class Circle extends Shapes { 
    constructor(r) {
        super(r, r);
    }

    area() {
        return Math.PI * Math.pow(this.width, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.width;
    }
}