// É possível alterar o texto de qualquer elemento com JS, de forma a permitir atrelar esta ação com algum evento posterior.

// utilizamos # para puxar id e . para classes

var title = document.querySelector("#title");

console.log(title);

// innerHTML

title.innerHTML = "Testando o texto alterado!";

// textContent - mais utilizado, recomendado e performático;

var subtitle = document.querySelector(".subtitle");

subtitle.textContent = "Testando o textContent";