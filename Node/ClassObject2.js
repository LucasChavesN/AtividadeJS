function obj(){
    
    var pessoa = {
        nome : "Lucas Chaves",
        hello : function(){
            return "Hello Pessoa";  
          }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

obj();