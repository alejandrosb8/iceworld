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

	icon.src =
		'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

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
