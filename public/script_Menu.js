//Seleccionar un item del menu//
const allSideMenu = document.querySelectorAll('.options__menu .side-menutop li a');
allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		//console.log(li)
		li.classList.add('active')
	})
});
//Seleccionar una item del menu//

//Desplegar menu de opciones//
const menuBar = document.querySelector('#menu__side .name__menu i');
const subMenu = document.querySelector('#menu1 i');
const sidebar = document.getElementById('menu__side');
const content = document.getElementById('content');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	content.classList.toggle('hide-content');
});
//Desplegar menu de opciones//

//Desplegar menu de login//
const btn_login = document.querySelector('#btn-login');
const btn_logout = document.getElementById('btn-logout');

btn_login.addEventListener('click', function (){
	btn_logout.classList.toggle('appear-container2');
});
//Desplegar menu de login//

// subMenu.addEventListener('click', function(){
// 	content.classList.toggle('prueba');
// });

// window.addEventListener('resize', function () {
// 	if(parseInt(this.innerWidth) <= 500) {
// 		console.log(parseInt(this.innerWidth));
// 		sidebar.classList.toggle('prueba');
// 	}
// });