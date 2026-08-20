// Métodos de string também auxiliam sua modificação. Ex: deixar a fonte em caixa alta ou baixa.

// toLowerCase e toUpperCase

var frase = "Está é a frase de teste";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

console.log(frase.toUpperCase());

// trim - remove espaços em branco antes e depois de uma string (não remove espaços entre string)

var nome = "        Matheus Lopes       ";

var nomeTrim = nome.trim();

console.log(nome);

console.log(nomeTrim);

// split - converte string em array ou array em string

console.log(frase.split(""));

var tags = "Java, Cibersegurança, PostgreSQL, JavaScript, C";

console.log(tags.split(", "));

// lastIndexOf 

var fraseDois = "Eu quero programar para encontrar o programar";

console.log(fraseDois.indexOf("programar"));

console.log(fraseDois.lastIndexOf("programar"));

