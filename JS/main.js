// Muda cor de fundo ao scroll 

function changeBg(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bg-color');
    } else {
        navbar.classList.add('bg-color');
    }
    
}

window.addEventListener('scroll', changeBg);

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Banner Principal Efeito Digitação 
// Lista de Texto
var _CONTENT = [ 
	"Ator", 
	"Cantor", 
	"Dançarino", 
	"Preparador Vocal"
];

// Texto atual sendo processado
var _PART = 0;

// Número do texto atual sendo processado
var _PART_INDEX = 0;

// Mantém o identificador retornado de setInterval
var _INTERVAL_VAL;

// Elemento que contém o texto
var _ELEMENT = document.querySelector(".text");

// Elemento do cursor
var _CURSOR = document.querySelector(".cursor");

// Implementa efeito de digitação
function Type() { 
	// Obter substring com 1 caractere adicionado
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// Se a frase completa foi exibida, comece a excluir a frase após algum tempo
	if(text === _CONTENT[_PART]) {
		// Esconder o cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implementa o efeito de exclusão
function Delete() {
	// Obter substring com 1 caractere excluído
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// Se a frase foi deletada então comece a exibir a próxima frase
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// Se a frase atual foi a última, exiba a primeira, senão vá para a próxima
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Comece a exibir a próxima frase após algum tempo
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 200);
		}, 300);
	}
}

// Iniciar o efeito de digitação ao carregar
_INTERVAL_VAL = setInterval(Type, 200);

// Elementos se revelam ao scroll

window.addEventListener('scroll', reveal);

function reveal(){
	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}
	}
}