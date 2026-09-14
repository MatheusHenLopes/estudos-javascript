// map pega um item do array por vez e retorna

const tecnologias = ["javascript", "node", "postgresql"];

tecnologias.map((tecnologia) => {
    console.log("Tecnologias: " + tecnologia);
}) 

////////////////////////////////////////////////////////

const companies = [
    { name: "Unimed" },
    { name: "CWI" },
    { name: "Microsoft" },
]

const resultadoCompanies = companies.map((nomes) => {
    console.log("Empresa: " + nomes.name);
})

////////////////////////////////////////////////////////

// join adiciona algo entre os elementos do array

const frutas = ["maçã", "banana", "uva"];

const text = frutas.join(" - ");

console.log(text);

///////////////////////////////////////////////////////

const nomes = ["Chris", "Vitor", "Flor"];

const texto = nomes.join("\n");

console.log(texto)