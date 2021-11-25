const btn = document.getElementById('btn');
const input = document.getElementById('inp');

btn.addEventListener('click', () => {
	if(input.value) {
		if(input.value.toLowerCase() === 'a') {
			alert('Incorrect. I am an only child');
		} else if(input.value.toLowerCase() === 'b') {
			alert('Incorrect. I started HTML in 2016');
		} else if(input.value.toLowerCase() === 'c') {
			alert('Correct! I have never been to Canda.');
		} else {
			alert('Please provide a valid response');
		}
	} else {
		alert('No answer specified!');
	}
});