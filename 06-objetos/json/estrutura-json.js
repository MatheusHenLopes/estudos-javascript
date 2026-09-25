const objetos = [
  {
    nome: "Matheus",
    idade: 18,
    esta_estudando: true,
    Jogos: ["Pokemon", "Overwatch", "Valorant"],
    detalhes_vaga: {
      cargo: "Estágio",
      empresa: " Nubank",
    },
  },
  {
    nome: "Avi",
    idade: 90,
    esta_estudando: false,
    Jogos: ["LOL", "Work", "DOOM"],
    detalhes_vaga: {
      cargo: "Junior",
      empresa: null,
    },
  },
];

console.log(objetos);

// Converter objeto para JSON válidos
// converte o array para uma string simples (json válido)

const jsonData = JSON.stringify(objetos);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})