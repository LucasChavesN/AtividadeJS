class Pessoa {
    constructor(){
        this.nome = "Lucas Chaves do Nascimento";
    }
    hello(){
        return "Hello Pessoa";
    }
}

function obj(){
    
    var pessoa = new Pessoa();

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

obj();