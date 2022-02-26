function home() {
	const homeDiv = document.createElement('div');
	const whiteDiv = document.createElement('div');
	const text = document.createElement('p');
	const icon = document.createElement('img');
	const button = document.createElement('button');

	homeDiv.setAttribute('id', 'mainDiv');
	whiteDiv.classList.add('homeDiv__whiteDiv');

	button.setAttribute('id', 'orderBtn');

	text.innerText =
		'Ice world is the best ice cream parlor in the world, do you like the cold, come and see what the north pole is like!';

	button.innerText = 'Order Now!';

	icon.src = '../../dist/assets/images/cup.jpg';

	whiteDiv.append(text, icon, button);
	homeDiv.appendChild(whiteDiv);

	return homeDiv;
}

function loadHome() {
	const main = document.getElementById('main');
	const homeDiv = home();
	main.appendChild(homeDiv);
}

export { loadHome };
