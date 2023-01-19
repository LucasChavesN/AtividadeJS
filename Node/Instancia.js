function Pessoa(){
    
    var pessoa = Object();
    this.nome = "Lucas Chaves";
    this.hello = function(){
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