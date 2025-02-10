function printResult(message) {
    document.getElementById("result").innerHTML = message;
}

	function add() {
		const num1 = parseFloat(document.getElementById("num1").value);
		const num2 = parseFloat(document.getElementById("num2").value);
		const sum=num1+num2;
		printResult("The sum of " + num1 + " and "+ num2 + " is " + sum+ ".");
	}

	function subtract() {
		const num1 = parseFloat(document.getElementById("num1").value);
		const num2 = parseFloat(document.getElementById("num2").value);
		const diff=num1-num2;
		printResult("The difference of " + num1 + " and "+ num2 + " is " + diff+ ".");
	}

	function multiply() {
		const num1 = parseFloat(document.getElementById("num1").value);
		const num2 = parseFloat(document.getElementById("num2").value);
		const prod=num1*num2;
		printResult("The product of " + num1 + " and "+ num2 + " is " + prod+ ".");
	}

	function divide() {
		const num1 = parseFloat(document.getElementById("num1").value);
		const num2 = parseFloat(document.getElementById("num2").value);
		const quot=num1/num2;
		printResult("The quotient of " + num1 + " and "+ num2 + " is " + quot+ ".");
		}

	function modulus() {
		const num1 = parseFloat(document.getElementById("num1").value);
		const num2 = parseFloat(document.getElementById("num2").value);
		const rem=num1%num2;
		printResult("The remainder of " + num1 + " and "+ num2 + " is " + rem+ ".");	
	}
