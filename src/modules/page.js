import { navbar } from './nav';

function header() {
	const header = document.createElement('header');
	const nav = navbar();
	const title = document.createElement('h1');
	title.innerText = 'Iceworld';

	header.append(title, nav);

	return header;
}

function main() {
	const main = document.createElement('main');
	main.setAttribute('id', 'main');
	return main;
}

function footer() {
	const footer = document.createElement('footer');
	const text = document.createElement('p');

	text.innerText = 'Copyright © 2022 alejandrosb8';

	footer.appendChild(text);

	return footer;
}

function pageLoad() {
	const mainPage = document.getElementById('content');

	mainPage.appendChild(header());
	mainPage.appendChild(main());
	mainPage.appendChild(footer());
}

export { pageLoad };
