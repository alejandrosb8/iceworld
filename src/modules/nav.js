function navbar() {
	const nav = document.createElement('nav');

	const homeLink = document.createElement('button');
	homeLink.innerText = 'Home';
	homeLink.classList.add('nav-button');
	homeLink.setAttribute('id', 'homeBtn');
	homeLink.classList.add('active');

	const menuLink = document.createElement('button');
	menuLink.innerText = 'Menu';
	menuLink.classList.add('nav-button');
	menuLink.setAttribute('id', 'menuBtn');

	const contactLink = document.createElement('button');
	contactLink.innerText = 'Contact';
	contactLink.classList.add('nav-button');
	contactLink.setAttribute('id', 'contactBtn');

	nav.append(homeLink, menuLink, contactLink);

	return nav;
}

export { navbar };
