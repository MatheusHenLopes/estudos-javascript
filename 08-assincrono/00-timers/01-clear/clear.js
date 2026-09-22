// clearTimeout e clearInterval

// Utilizamos esses métodos para finalizar as funções de setTimeout e setInterval. Após determinada condição os timers terão sua execuçãoe encerrada.

// clearTimeout

 var x = 0;

 // É necessário armazenar o setTimeout dentro de uma varíavel para que o mesmo seja passado como parâmetro posteriormente dentro do clearTimeout

 var myTimer = setTimeout(function(){
    console.log("O x é " + x)
 }, 1500);

 x = 1;

 if(x > 0) {
    clearTimeout(myTimer)
    console.log("O x passou de zero")
 }

 // clearInterval

 myInterval = setInterval(function(){
    console.log("Aqui o setInterval");
 }, 500);

 setTimeout(function(){
    console.log("Interromper intervalo");
    clearInterval(myInterval)
 }, 8000)
