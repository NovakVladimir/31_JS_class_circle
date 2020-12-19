class Circle {
    constructor(radius) {
        this.radius = radius;
        this.square = this.calcSquare(this.radius);
    }
    get rad() {
        return this.radius;
    } 
    set rad(newRadius) {
        this.radius = newRadius;
    }
    get diametr() {
        return this.radius * 2;
    }
    calcSquare(rad) {
        square = 2 * Math.PI * rad;
        return square;
    }
}