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
			opr = "";
			break;
		case 'remainder':
			if (opr == op.id) {
				buf1 = Number(buf1) % Number(buf2); 
				buf2 = ctext.textContent;
				ctext.textContent = Number(buf1) % Number(buf2);
				ca = false;
			} else if (opr != op.id) {
				opr = op.id;
				buf1 = ctext.textContent;
				ca = false;
				ctext.textContent = "0";
			};
			break;
		case 'divide':
			if (opr == op.id) {
				buf1 = Number(buf1) / Number(buf2); 
				buf2 = ctext.textContent;
				ctext.textContent = Number(buf1) / Number(buf2);
				ca = false;
			} else if (opr != op.id) {
				opr = op.id;
				buf1 = ctext.textContent;
				ca = false;
				ctext.textContent = "0";
			};
			break;
		case 'multiply':
			if (opr == op.id) {
				buf1 = Number(buf1) * Number(buf2); 
				buf2 = ctext.textContent;
				ctext.textContent = Number(buf1) * Number(buf2);
				ca = false;
			} else if (opr != op.id) {
				opr = op.id;
				buf1 = ctext.textContent;
				ca = false;
				ctext.textContent = "0";
			};
			break;
		case 'minus':
			if (opr == op.id) {
				buf1 = Number(buf1) - Number(buf2); 
				buf2 = ctext.textContent;
				ctext.textContent = Number(buf1) - Number(buf2);
				ca = false;
			} else if (opr != op.id) {
				opr = op.id;
				buf1 = ctext.textContent;
				ca = false;
				ctext.textContent = "0";
			};
			break;
		case 'plus':
			if (opr == op.id && ca) {
				buf1 = Number(buf1) + Number(buf2); 
				buf2 = ctext.textContent;
				ctext.textContent = Number(buf1) + Number(buf2);
				ca = false;
			} else if (opr != op.id) {
				opr = op.id;
				buf1 = ctext.textContent;
				ca = false;
				ctext.textContent = "0";
			};
			break;
		case 'dot':
			if (ctext.textContent.includes('.')) {
				console.log("Has a dot");
			} else if (!ctext.textContent.includes('.')) {
				ctext.textContent += '.';
			};
			break;
		case 'equals':
			switch (opr){
				case 'remainder':
					buf2 = ctext.textContent;
					ctext.textContent = Number(buf1) % Number(buf2);
				ca = false;
					break;
				case 'divide':
					buf2 = ctext.textContent;
					ctext.textContent = Number(buf1) / Number(buf2);
				ca = false;
					break;
				case 'multiply':
					buf2 = ctext.textContent;
					ctext.textContent = Number(buf1) * Number(buf2);
				ca = false;
					break;
				case 'minus':
					buf2 = ctext.textContent;
					ctext.textContent = Number(buf1) - Number(buf2);
				ca = false;
					break;
				case 'plus':
					buf2 = ctext.textContent;
					ctext.textContent = Number(buf1) + Number(buf2);
				ca = false;
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
	let target = event.target;
	if (target.getAttribute("class", "btn")) {
	const btn_sfx = new Audio("sfx/key.mp3");
	btn_sfx.play();
	}
	operate(target);
})
