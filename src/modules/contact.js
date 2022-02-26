function contact() {
	const contactDiv = document.createElement('div');
	contactDiv.setAttribute('id', 'mainDiv');

	const whiteDiv = document.createElement('div');
	whiteDiv.classList.add('contact__whiteDiv');

	const infoContainer = document.createElement('div');
	infoContainer.classList.add('contact-info-container');

	const title = document.createElement('h2');
	const phoneDiv = document.createElement('div');
	const dirDiv = document.createElement('div');

	phoneDiv.classList.add('div-phone');
	dirDiv.classList.add('div-dir');

	const phoneIcon = document.createElement('span');
	const dirIcon = document.createElement('span');
	const phoneText = document.createElement('p');
	const dirText = document.createElement('p');

	title.innerText = 'Contact Us!';
	phoneText.innerText = '123-1234567';
	dirText.innerText = 'New York, USA';

	phoneDiv.append(phoneIcon, phoneText);
	dirDiv.append(dirIcon, dirText);

	infoContainer.append(phoneDiv, dirDiv);

	whiteDiv.append(title, infoContainer);

	contactDiv.appendChild(whiteDiv);

	return contactDiv;
}

function loadContact() {
	const main = document.getElementById('main');
	const contactDiv = contact();
	main.appendChild(contactDiv);
}

export { loadContact };
