class Rectangle {
	constructor(protected width: number, protected height: number) {
		if (width <= 0 || height <= 0) {
			throw new Error("Width and height must be positive integers.");
		}
	}

	getWidth(): number {
		return this.width;
	}

	getHeight(): number {
		return this.height;
	}

	getArea(): number {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side: number) {
		super(side, side);
		if (side <= 0) {
			throw new Error("Side length must be a positive integer.");
		}
	}

	getPerimeter(): number {
		return 4 * this.width;
	}
}

// Do not change the code below this line
(window as any).Rectangle = Rectangle;
(window as any).Square = Square;
