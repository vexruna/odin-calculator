const menu = document.querySelector("#calc-menu");
const text = document.querySelector("#calc-text");

let opr = '';
let ac = false;
let buf1 = 0;
let buf2 = 0;

const setText = function (value) {
	text.textContent = value;
}

const setOperator = function (operator) {
	opr = operator;
}

const clear = function () {
	ac = false;
	buf1 = 0;
	buf2 = 0;
	opr = '';
	setText("0");
}

const setValue = function (value) {
	switch (value) {
		case '.':
			if (!opr) {
				if (!buf1.toString().includes('.')) {
					buf1 += value;
					ac = true;
					setText(buf1);
				};
			} else if (opr) {
				if (!buf2.toString().includes('.')) {
					buf2 += value;
					ac = true;
					setText(buf2);
				};
			}
			break;
		default:
			if (opr == '') {
				buf1 = (!ac) ? value: buf1 + value;
				ac = true;
				setText(buf1);
			} else if (opr != '') {
				buf2 = (!ac) ? value : buf2 + value;
				ac = true;
				setText(buf2);
			}
			break;
	}
};

const operate = (op, a, b) => {
	ac = false;
	switch (op) {
		case 'remainder':
			buf1 = Number(a) % Number(b);
			buf1 = (buf1 === Math.floor(buf1)) ? buf1 : buf1.toFixed(2);
			setText(buf1);
			break;
		case 'divide':
			if (b === "0") {
				setText("ERROR")
				const error_sfx = new Audio("sfx/error.mp3");
				error_sfx.play();
			} else {
				buf1 = Number(a) / Number(b);
				buf1 = (buf1 === Math.floor(buf1)) ? buf1 : buf1.toFixed(2);
				setText(buf1);
			}
			break;
		case 'multiply':
			buf1 = Number(a) * Number(b);
			buf1 = (buf1 === Math.floor(buf1)) ? buf1 : buf1.toFixed(2);
			setText(buf1);
			break;
		case 'minus':
			buf1 = Number(a) - Number(b);
			buf1 = (buf1 === Math.floor(buf1)) ? buf1 : buf1.toFixed(2);
			setText(buf1);
			break;
		case 'plus':
			buf1 = Number(a) + Number(b);
			buf1 = (buf1 === Math.floor(buf1)) ? buf1 : buf1.toFixed(2);
			setText(buf1);
			break;
		}
};

const clickButton = function (button) {
	const b = button.textContent;

	switch (button.getAttribute("id")) {
		case null:
			setValue(b);
			break;
		case 'eight':
			const eight_sfx = new Audio("sfx/eight.mp3");
			eight_sfx.play();
			button.textContent = "eight";
			setValue("8");
			break;
		case 'clear':
			clear();
			break;
		case 'equals':
			operate(opr, buf1, buf2);
			opr = '';
		default:
			if (button.id != 'equals' && button.id != 'calc-menu') {
				operate(opr, buf1, buf2);
				setOperator(button.id);
				ac = false;
			};
	};
};

menu.addEventListener('click', (event) => {
	let target = event.target;
	if (target.getAttribute("class", "btn")) {
	const btn_sfx = new Audio("sfx/key.mp3");
	btn_sfx.play();
	}
	clickButton(target);
})
