/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\ninit();\r\n\r\nfunction init() {\r\n\t(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\r\n\t(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n\taddEvents();\r\n\tbuttonOrderEvent();\r\n}\r\n\r\nfunction addEvents() {\r\n\tconst buttons = Array.from(document.getElementsByClassName('nav-button'));\r\n\r\n\tbuttons.forEach((button) => {\r\n\t\tbutton.addEventListener('click', (e) => {\r\n\t\t\tswitchButtons(e.target);\r\n\t\t\tswitchTab(e.target);\r\n\t\t});\r\n\t});\r\n}\r\n\r\nfunction buttonOrderEvent() {\r\n\tconst orderBtn = document.getElementById('orderBtn');\r\n\torderBtn.addEventListener('click', () => {\r\n\t\tconst menuLink = document.getElementById('menuBtn');\r\n\t\tswitchButtons(menuLink);\r\n\t\tswitchTab(menuLink);\r\n\t});\r\n}\r\n\r\nfunction switchButtons(e) {\r\n\tconst current = document.getElementsByClassName('active');\r\n\tcurrent[0].classList.remove('active');\r\n\te.classList.add('active');\r\n}\r\n\r\nfunction switchTab(e) {\r\n\tconst id = e.id;\r\n\r\n\twipeTab();\r\n\r\n\tswitch (id) {\r\n\t\tcase 'homeBtn':\r\n\t\t\t(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n\t\t\tbuttonOrderEvent();\r\n\t\t\tbreak;\r\n\t\tcase 'menuBtn':\r\n\t\t\t(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n\t\t\tbreak;\r\n\t\tcase 'contactBtn':\r\n\t\t\t(0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)();\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\tbreak;\r\n\t}\r\n}\r\n\r\nfunction wipeTab() {\r\n\tconst tab = document.getElementById('mainDiv');\r\n\r\n\tif (tab != null) {\r\n\t\ttab.remove();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://iceworld/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction contact() {\r\n\tconst contactDiv = document.createElement('div');\r\n\tcontactDiv.setAttribute('id', 'mainDiv');\r\n\r\n\tconst whiteDiv = document.createElement('div');\r\n\twhiteDiv.classList.add('contact__whiteDiv');\r\n\r\n\tconst infoContainer = document.createElement('div');\r\n\tinfoContainer.classList.add('contact-info-container');\r\n\r\n\tconst title = document.createElement('h2');\r\n\tconst phoneDiv = document.createElement('div');\r\n\tconst dirDiv = document.createElement('div');\r\n\r\n\tphoneDiv.classList.add('div-phone');\r\n\tdirDiv.classList.add('div-dir');\r\n\r\n\tconst phoneIcon = document.createElement('span');\r\n\tconst dirIcon = document.createElement('span');\r\n\tconst phoneText = document.createElement('p');\r\n\tconst dirText = document.createElement('p');\r\n\r\n\ttitle.innerText = 'Contact Us!';\r\n\tphoneText.innerText = '123-1234567';\r\n\tdirText.innerText = 'New York, USA';\r\n\r\n\tphoneDiv.append(phoneIcon, phoneText);\r\n\tdirDiv.append(dirIcon, dirText);\r\n\r\n\tinfoContainer.append(phoneDiv, dirDiv);\r\n\r\n\twhiteDiv.append(title, infoContainer);\r\n\r\n\tcontactDiv.appendChild(whiteDiv);\r\n\r\n\treturn contactDiv;\r\n}\r\n\r\nfunction loadContact() {\r\n\tconst main = document.getElementById('main');\r\n\tconst contactDiv = contact();\r\n\tmain.appendChild(contactDiv);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://iceworld/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction home() {\r\n\tconst homeDiv = document.createElement('div');\r\n\tconst whiteDiv = document.createElement('div');\r\n\tconst text = document.createElement('p');\r\n\tconst icon = document.createElement('img');\r\n\tconst button = document.createElement('button');\r\n\r\n\thomeDiv.setAttribute('id', 'mainDiv');\r\n\twhiteDiv.classList.add('homeDiv__whiteDiv');\r\n\r\n\tbutton.setAttribute('id', 'orderBtn');\r\n\r\n\ttext.innerText =\r\n\t\t'Ice world is the best ice cream parlor in the world, do you like the cold, come and see what the north pole is like!';\r\n\r\n\tbutton.innerText = 'Order Now!';\r\n\r\n\ticon.src = '../../dist/assets/images/cup.jpg';\r\n\r\n\twhiteDiv.append(text, icon, button);\r\n\thomeDiv.appendChild(whiteDiv);\r\n\r\n\treturn homeDiv;\r\n}\r\n\r\nfunction loadHome() {\r\n\tconst main = document.getElementById('main');\r\n\tconst homeDiv = home();\r\n\tmain.appendChild(homeDiv);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://iceworld/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction menu() {\r\n\tconst menuDiv = document.createElement('div');\r\n\tmenuDiv.setAttribute('id', 'mainDiv');\r\n\r\n\tconst cardContainer = document.createElement('div');\r\n\tcardContainer.classList.add('card-container');\r\n\r\n\tconst items = [\r\n\t\tcreateItem('Cup', '2$', '../../dist/assets/images/cup.jpg'),\r\n\t\tcreateItem('Cone', '1.5$', '../../dist/assets/images/cone.jpg'),\r\n\t\tcreateItem('Bow', '3$', '../../dist/assets/images/bow.jpg'),\r\n\t\tcreateItem('Special', '3.5$', '../../dist/assets/images/special.jpg'),\r\n\t];\r\n\r\n\titems.forEach((item) => {\r\n\t\tcardContainer.appendChild(item);\r\n\t});\r\n\r\n\tmenuDiv.appendChild(cardContainer);\r\n\r\n\treturn menuDiv;\r\n}\r\n\r\nfunction createItem(name, price, src) {\r\n\tconst item = document.createElement('div');\r\n\tconst itemImage = document.createElement('img');\r\n\tconst bar = document.createElement('div');\r\n\tconst itemName = document.createElement('p');\r\n\tconst underline = document.createElement('span');\r\n\tconst itemPrice = document.createElement('p');\r\n\r\n\titem.classList.add('menu__card');\r\n\tbar.classList.add('card__bar');\r\n\r\n\titemImage.src = src;\r\n\r\n\titemName.innerText = name;\r\n\titemPrice.innerText = price;\r\n\r\n\tbar.append(itemName, underline, itemPrice);\r\n\titem.append(itemImage, bar);\r\n\r\n\treturn item;\r\n}\r\n\r\nfunction loadMenu() {\r\n\tconst main = document.getElementById('main');\r\n\tconst menuDiv = menu();\r\n\tmain.appendChild(menuDiv);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://iceworld/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\nfunction navbar() {\r\n\tconst nav = document.createElement('nav');\r\n\r\n\tconst homeLink = document.createElement('button');\r\n\thomeLink.innerText = 'Home';\r\n\thomeLink.classList.add('nav-button');\r\n\thomeLink.setAttribute('id', 'homeBtn');\r\n\thomeLink.classList.add('active');\r\n\r\n\tconst menuLink = document.createElement('button');\r\n\tmenuLink.innerText = 'Menu';\r\n\tmenuLink.classList.add('nav-button');\r\n\tmenuLink.setAttribute('id', 'menuBtn');\r\n\r\n\tconst contactLink = document.createElement('button');\r\n\tcontactLink.innerText = 'Contact';\r\n\tcontactLink.classList.add('nav-button');\r\n\tcontactLink.setAttribute('id', 'contactBtn');\r\n\r\n\tnav.append(homeLink, menuLink, contactLink);\r\n\r\n\treturn nav;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://iceworld/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/modules/nav.js\");\n\r\n\r\nfunction header() {\r\n\tconst header = document.createElement('header');\r\n\tconst nav = (0,_nav__WEBPACK_IMPORTED_MODULE_0__.navbar)();\r\n\tconst title = document.createElement('h1');\r\n\ttitle.innerText = 'Iceworld';\r\n\r\n\theader.append(title, nav);\r\n\r\n\treturn header;\r\n}\r\n\r\nfunction main() {\r\n\tconst main = document.createElement('main');\r\n\tmain.setAttribute('id', 'main');\r\n\treturn main;\r\n}\r\n\r\nfunction footer() {\r\n\tconst footer = document.createElement('footer');\r\n\tconst text = document.createElement('p');\r\n\r\n\ttext.innerText = 'Copyright © 2022 alejandrosb8';\r\n\r\n\tfooter.appendChild(text);\r\n\r\n\treturn footer;\r\n}\r\n\r\nfunction pageLoad() {\r\n\tconst mainPage = document.getElementById('content');\r\n\r\n\tmainPage.appendChild(header());\r\n\tmainPage.appendChild(main());\r\n\tmainPage.appendChild(footer());\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://iceworld/./src/modules/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;