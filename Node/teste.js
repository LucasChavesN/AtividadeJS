
function testeVar(){

    var a = 1;

    var b = 5;

    var soma = a + b;

    var nome = "Lucas Chaves";

    if(nome == undefined){
        console.log("Teste 1 - O nome não foi incializado");
    }

    if(typeof(nome) == "undefined"){
        console.log("Teste 2 - O nome não foi inicializado");
    }

    console.log("O tipo do nome é %s e o tipo da soma é %s",typeof(nome),typeof(soma));
    console.log("Ola %s, o resultado da soma é: %d", nome, soma, "que legal")
}

testeVar()