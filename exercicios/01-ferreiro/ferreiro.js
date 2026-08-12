// Um ferreiro está testando a qualidade de 5 espadas recém-forjadas. O sistema avalia a resistência de cada lâmina com uma nota de 0 a 100. Espadas com resistência abaixo de 80 são descartadas.

const resistenciaMinima = 80;

const resistenciaEspadas = [98, 89, 100, 99, 71];

for (let espadasTestadas = 0; espadasTestadas < resistenciaEspadas.length; espadasTestadas++) {

    if (resistenciaMinima > resistenciaEspadas[espadasTestadas]) {

        console.log ("Espada " + (espadasTestadas + 1) + ": " + resistenciaEspadas[espadasTestadas] + " não é adequada para uso...");

        console.log ("Pare a produção, não podemos mais gastar ferro!")

        break

    }

    else {

        console.log ("Espada " + (espadasTestadas + 1)+ ": " + resistenciaEspadas[espadasTestadas] + " é adequada para uso!");

    }

}