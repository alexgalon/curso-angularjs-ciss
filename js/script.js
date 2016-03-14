var nomeUsuario  = document.getElementById('name');
var idadeUsuario = document.getElementById('age');

var formUsuario = document.getElementById('form');

formUsuario.addEventListener('submit', function(){
	alert('Olá ' + nomeUsuario.value + '. Você tem ' + idadeUsuario.value + ' anos!');
});