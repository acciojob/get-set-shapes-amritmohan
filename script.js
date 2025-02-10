class Rectangle {
	private _width: number;
	private _height: number;

	constructor(width: number, height: number) {
		// Ensure width and height are positive integers
		if (width <= 0 || height <= 0) {
			throw new Error("Width and height must be positive integers.");
		}
		this._width = width;
		this._height = height;
	}

	// Getter for width
	get width(): number {
		return this._width;
	}

	// Getter for height
	get height(): number {
		return this._height;
	}

	// Method to calculate area
	getArea(): number {
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side: number) {
		// Ensure side is a positive integer
		if (side <= 0) {
			throw new Error("Side length must be a positive integer.");
		}
		super(side, side);
	}

	// Method to calculate perimeter
	getPerimeter(): number {
		return 4 * this.width;
	}
}

// Do not change the code below this line
(window as any).Rectangle = Rectangle;
(window as any).Square = Square;
