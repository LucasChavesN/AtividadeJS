function obj(){
    
    var pessoa = Object();
    pessoa.nome = "Lucas";
    pessoa.hello = function(){
      return "Hello Pessoa";  
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

obj();