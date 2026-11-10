const menu = document.querySelector("#calc-menu");

const ctext = document.querySelector("#calc-text");

let ca = false;
let opr = "";
let buf1 = 0;
let buf2 = 0;

const operate = (op) => {
	switch (op.id) {
		case 'clear':
			ctext.textContent = "0";
			ca = false;
			buf1 = 0;
			buf2 = 0;
			break;
		case 'remainder':
			opr = op.id;
			buf1 = ctext.textContent;
			ca = false;
			ctext.textContent = "0";
			break;
		case 'divide':
			opr = op.id;
			buf1 = ctext.textContent;
			ca = false;
			ctext.textContent = "0";
			break;
		case 'multiply':
			opr = op.id;
			buf1 = ctext.textContent;
			ca = false;
			ctext.textContent = "0";
			break;
		case 'minus':
			opr = op.id;
			buf1 = ctext.textContent;
			ca = false;
			ctext.textContent = "0";
			break;
		case 'plus':
			opr = op.id;
			buf1 = ctext.textContent;
			ca = false;
			ctext.textContent = "0";
			break;
		case 'dot':
			break;
		case 'equals':
			switch (opr){
				case 'plus':
					buf2 = ctext.textContent;
					ctext.textContent = Number(buf1) + Number(buf2);
					break;
			}
			break;
		case 'zero':
			if (ctext.textContent != "0"){
				ctext.textContent += 0;
			}
			break;
		case 'eight':
			const eight_sfx = new Audio("sfx/eight.mp3");
			eight_sfx.play();
			op.textContent = "eight";

			if (!ca) {
				ctext.textContent = 8;
				ca = true;
			}
			else if (ca) {
			ctext.textContent += 8;
			}
			break;
		case '':
			if (!ca) {
				ctext.textContent = op.textContent;
				ca = true;
			} else if (ca) {
				ctext.textContent += op.textContent;
			};
			break;
	}
};

menu.addEventListener('click', (event) => {
	const btn_sfx = new Audio("sfx/key.mp3");
	btn_sfx.play();

	let target = event.target;
	operate(target);
})
