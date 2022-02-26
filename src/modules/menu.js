function menu() {
	const menuDiv = document.createElement('div');
	menuDiv.setAttribute('id', 'mainDiv');

	const cardContainer = document.createElement('div');
	cardContainer.classList.add('card-container');

	const items = [
		createItem('Cup', '2$', '../../dist/assets/images/cup.jpg'),
		createItem('Cone', '1.5$', '../../dist/assets/images/cone.jpg'),
		createItem('Bow', '3$', '../../dist/assets/images/bow.jpg'),
		createItem('Special', '3.5$', '../../dist/assets/images/special.jpg'),
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
