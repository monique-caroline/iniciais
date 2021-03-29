// Perguntar nome e sobrenome
var name = prompt("Qual o seu nome e sobrenome?")

// pegar a primeira letra do primeiro nome
var firsInitial = name.slice(0,1);

// pegar a posição da primeira letra do sobrenome
var secondInitialPosition = name.indexOf(" ") + 1;

// pegar a primeira letra do segundo nome
var secondInitialPosition = name.slice(secondInitialPosition, secondInitialPosition + 1);

document.write("Suas iniciais são: " + firsInitial.toUpperCase() + secondInitialPosition.toUpperCase());