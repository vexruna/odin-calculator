const menu = document.querySelector("#calc-menu");

const ctext = document.querySelector("#calc-text");

let ca = false;

const operate = (op) => {
	switch (op.id) {
		case 'clear':
			ctext.textContent = "0";
			ca = false;
			break;
		case 'remainder':
			break;
		case 'divide':
			break;
		case 'multiply':
			break;
		case 'minus':
			break;
		case 'plus':
			break;
		case 'dot':
			break;
		case 'equals':
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
