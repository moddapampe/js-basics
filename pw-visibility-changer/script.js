const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener('click', () => {
	if (input.type === 'password') {
		input.type = 'text';
		button.innerText = '🙀 Hide password';
	} else {
		input.type = 'password';
		button.innerText = '👀 Show password';
	}
});

// Fast, Cheap, Good

let checkboxes = document.querySelectorAll('input');
let checkedBoxes = [];

for (let checkbox of checkboxes) {
	checkbox.addEventListener('change', () => {
		if (checkbox.checked) {
			if (checkedBoxes.length >= 2) {
				
				const lastCheckbox = checkedBoxes.pop();
				lastCheckbox.checked = false;
			}
			
			checkedBoxes.push(checkbox);
		} else {
			
			const index = checkedBoxes.indexOf(checkbox);
			checkedBoxes.splice(index, 1);
		}
	});
}