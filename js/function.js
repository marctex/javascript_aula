function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,4))

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(setReplace("Meu nome é qualquer.","qualquer", "Marcelo"));

var validar='';
function validaIdade(idade){
    
    if(idade>=18){
        validar = "Sou maior de idade";
    }else{
        validar = "Sou menor de idade";
    } 
    return validar;   
}
var idade = prompt("Qual a sua idade?");
alert(validaIdade(idade));
