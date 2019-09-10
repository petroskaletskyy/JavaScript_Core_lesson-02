"use strict"

function calc(a, operator, b) {

	let res = "";
	process.stdout.write(a + " " + operator + " " + b + " " +  "=" + " ");

	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Введено невірне число!!!";
		} else if (operator != "+" && operator != "-" && operator != "*"
				&& operator != "/") {
			throw "Введено невірний оператор!!!";
		} else {
			switch (operator) {
			case "+": {
				res = a + b;
				break;
			}
			case "-": {
				res = a - b;
				break;
			}
			case "*": {
				res = a * b;
				break;
			}
			case "/": {
				if (b == 0) {
					throw "На нуль ділити не можна";
				} else {
					res = a / b;
					break;
				}
			}
			}
		}

	} catch (err) {
		process.stdout.write(err);
	}

	return res;
}

let a = 12;
let b = 3.7;

console.log("Перевіримо функцію:");
console.log(calc(a, "+", b));
console.log(calc(a, "-", b));
console.log(calc(a, "*", b));
console.log(calc(a, "/", b));
console.log();
console.log("Перевіримо помилки:");
console.log(calc("a", "+", b));
console.log(calc(a, "-", "b"));
console.log(calc(a, "@", b));
console.log(calc(a, "/", 0));