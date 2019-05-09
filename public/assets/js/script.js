'use strict';

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', initWindowLoad);

function init() {
	addClasses();
	initBurger();
	initPopUp();
	initSearch();
}

function initWindowLoad() {
	if( Cookies.get('newsletter_shown') === undefined ) {
		setTimeout(function () {
			let newsletter = document.querySelector('.newsletter-signup');
			let overlay = document.querySelector('div.overlay');

			if (!newsletter.classList.contains('newsletter-popup')) {
				newsletter.classList.add('newsletter-popup');
				overlay.classList.add('overlay-visible');
			}
		}, parseInt(theme_option.newsletter_timing) * 1000);
	}
}

function initSearch() {
	let flag = false;
	let trigger = document.querySelector('li.header-search-li-elm button');
	let searchbar = trigger.parentElement.nextElementSibling.firstElementChild;

	trigger.addEventListener('click', function () {
		if (flag == false) {
			flag = true;
			searchbar.style.width = '10vw';
			searchbar.style.opacity = '1';
		} else {
			flag = false;
			searchbar.style.width = '0px';
			searchbar.style.opacity = '0';
		}
	})

}

function initPopUp() {
	let trigger = document.querySelector('.newsletter-trigger');
	let newsletter = document.querySelector('.newsletter-signup');
	let overlay = document.querySelector('div.overlay');
	let closeButton = document.querySelector('div.close-newsletter-signup');

	trigger.addEventListener('click', e => {
		if (newsletter.classList.contains('newsletter-popup')) {
			newsletter.classList.remove('newsletter-popup');
			overlay.classList.remove('overlay-visible');
		} else {
			newsletter.classList.add('newsletter-popup');
			overlay.classList.add('overlay-visible');
		}
	});
	closeButton.addEventListener('click', e => {
		newsletter.classList.remove('newsletter-popup');
		overlay.classList.remove('overlay-visible');
		Cookies.set('newsletter_shown', '1', { expires: parseInt(theme_option.newsletter_cookie) });
	});
	overlay.addEventListener('click', e => {
		newsletter.classList.remove('newsletter-popup');
		overlay.classList.remove('overlay-visible');
		Cookies.set('newsletter_shown', '1', { expires: parseInt(theme_option.newsletter_cookie) });
	});
}

function initBurger() {
	let html = document.getElementsByTagName( 'html' )[0];
	let body = document.body;
	let icon = document.querySelector('.burger-menu-wrapper');
	let trigger = document.querySelector('.burger-trigger-wrapper');
	let checkbox = document.querySelector('.burger-trigger-wrapper input');
	let menu = document.querySelector('.menu-burger-menu-container');
	let span1 = document.querySelector('.burger').firstElementChild;
	let span2 = span1.nextElementSibling;
	let spanParent = document.querySelector('.burger');

	trigger.addEventListener('click', function () {
		if (checkbox.checked == true) {
			//spanParent.style.height = '10px';
			//spanParent.style.width = '10px';
			span1.style.transform = 'rotate(45deg)';
			span1.style.marginBottom = '-2px';
			span1.style.width = '10px';
			span2.style.transform = 'rotate(-45deg)';
			span2.style.marginTop = '-2px';
			span2.style.width = '10px';
			menu.style.top = '89px';
			menu.style.opacity = '1';
			menu.style.visibility = 'visible';
			html.classList.add("menu-burger-open");
			body.classList.add("menu-burger-open");
		} else {
			span1.style.transform = 'rotate(0deg)';
			span1.style.marginBottom = '0px';
			span1.style.width = '8px';

			span2.style.transform = 'rotate(0deg)';
			span2.style.marginTop = '0px';
			span2.style.width = '5px';
			menu.style.top = '0';
			menu.style.opacity = '0';
			menu.style.visibility = 'hidden';
			html.classList.remove("menu-burger-open");
			body.classList.remove("menu-burger-open");
		}
	});
}

function addClasses() {
	let catLists = document.querySelectorAll('.category-list-container');
	catLists.forEach(a => {
		let children = a.children;
		let childrenArr = Array.from(children);
		childrenArr.forEach(child => {
			child.classList.add('small-uppercase');
		})
	});
	let liA = document.querySelectorAll('.menu-main-menu-container li')
	liA.forEach(a => {
		a.firstElementChild.classList.add('small-uppercase');
	})
}