Array.prototype.pushMethod = function (...value) {
	for (const el of value) {
		this[this.length] = el;
	}
	return this.length;
};

Array.prototype.myMapMethod = function (callback) {
	let newArr = [];

	for (let i = 0; i < this.length; i++) {
		let newValue = callback(this[i], i, this);
		newArr.pushMethod(newValue);
	}

	return newArr;
};

let box = [4, 8, 12];
let newBox = box.myMapMethod((el) => el * 10);
console.log(newBox);
