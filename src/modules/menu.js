function menu() {
	const menuDiv = document.createElement('div');
	menuDiv.setAttribute('id', 'mainDiv');

	const cardContainer = document.createElement('div');
	cardContainer.classList.add('card-container');

	const items = [
		createItem(
			'Cup',
			'2$',
			'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
		),
		createItem(
			'Cone',
			'1.5$',
			'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
		),
		createItem(
			'Bow',
			'3$',
			'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
		),
		createItem(
			'Special',
			'3.5$',
			'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
		),
	];

	items.forEach((item) => {
		cardContainer.appendChild(item);
	});

	menuDiv.appendChild(cardContainer);

	return menuDiv;
}

function createItem(name, price, src) {
	const item = document.createElement('div');
	const itemImage = document.createElement('img');
	const bar = document.createElement('div');
	const itemName = document.createElement('p');
	const underline = document.createElement('span');
	const itemPrice = document.createElement('p');

	item.classList.add('menu__card');
	bar.classList.add('card__bar');

	itemImage.src = src;

	itemName.innerText = name;
	itemPrice.innerText = price;

	bar.append(itemName, underline, itemPrice);
	item.append(itemImage, bar);

	return item;
}

function loadMenu() {
	const main = document.getElementById('main');
	const menuDiv = menu();
	main.appendChild(menuDiv);
}

export { loadMenu };
