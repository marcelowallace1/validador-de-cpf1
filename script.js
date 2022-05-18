console.log("exibido")

function validaCPF(Cpf){
    console.log(Cpf.length)
    if(Cpf.length != 11){
        return false
    }else{
        var numeros = Cpf.substring(0,9)
        var digitos = Cpf.substring(9)
        console.log(numeros, digitos)

        var soma = 0
        for(var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i
        }

        //uso de operador condicional(ternario) este e o unico operador js que possui tres operandos
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        if(resultado != digitos.charAt(0)){
            return false;
        }

        soma = 0;
        numeros = Cpf.substring(0, 10);
        for(var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }
           resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
           //validacao do segundo digito
           if(resultado != digitos.charAt(1)){
            return false;
        }
        
        
           return true;
        }
    }


function validacao (){
    console.log("inciando validacao")
   var  Cpf = document.getElementById('cpf_digitado').value
   document.getElementById('success').style.display = 'none';
   document.getElementById('error').style.display = 'none';
    
    var resultadoValidacao = validaCPF(Cpf)
    // nao precisamos comparar se o elemento e verdadeiro
    if(resultadoValidacao){
        document.getElementById("success").style.display = 'block'
    }
    else{
        document.getElementById('error').style.display = 'block'
    }
}

