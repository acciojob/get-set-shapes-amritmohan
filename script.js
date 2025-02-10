class Rectangle {
	protected width: number;
	protected height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	get Width(): number {
		return this.width;
	}

	get Height(): number {
		return this.height;
	}

	getArea(): number {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side: number) {
		super(side, side);
	}

	getPerimeter(): number {
		// Fixed: Correctly call the getter method
		return 4 * this.Width; 
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
