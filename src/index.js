import { pageLoad } from './modules/page';
import { loadHome } from './modules/home';
import { loadMenu } from './modules/menu';
import { loadContact } from './modules/contact';

init();

function init() {
	pageLoad();
	loadHome();
	addEvents();
	buttonOrderEvent();
}

function addEvents() {
	const buttons = Array.from(document.getElementsByClassName('nav-button'));

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			switchButtons(e.target);
			switchTab(e.target);
		});
	});
}

function buttonOrderEvent() {
	const orderBtn = document.getElementById('orderBtn');
	orderBtn.addEventListener('click', () => {
		const menuLink = document.getElementById('menuBtn');
		switchButtons(menuLink);
		switchTab(menuLink);
	});
}

function switchButtons(e) {
	const current = document.getElementsByClassName('active');
	current[0].classList.remove('active');
	e.classList.add('active');
}

function switchTab(e) {
	const id = e.id;

	wipeTab();

	switch (id) {
		case 'homeBtn':
			loadHome();
			buttonOrderEvent();
			break;
		case 'menuBtn':
			loadMenu();
			break;
		case 'contactBtn':
			loadContact();
			break;
		default:
			break;
	}
}

function wipeTab() {
	const tab = document.getElementById('mainDiv');

	if (tab != null) {
		tab.remove();
	}
}
