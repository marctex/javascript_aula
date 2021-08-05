var nome = "Marcelo Teixeira";
var idade = 59;
var idade2 = 10;
var frase = "HTML é uma linguagem de estilo."
//alert("Prazer, " + nome + " .Voce tem " + idade + " anos?");
//alert(idade + idade2);

console.log(nome);
console.log(idade);
console.log(frase.replace("estilo","marcação"));
console.log(frase.toLocaleLowerCase());
console.log(frase.toLocaleUpperCase());

// -----------------------------------------------------------------------
// LISTAS
var lista = ["maçã","banana","abacaxi"];
lista.push("uva");                         // insere um elemento na lista  no final
console.log(lista);
lista.pop();                               // retira o ultimo elemento da lista   
alert(lista);
lista.push("pera");
console.log(lista.length);                 // mostra quantidade de elementos na lista
console.log(lista.reverse());              // apresenta o elementos em sequencia inversa
console.log(lista.toString());             // apresenta como string
console.log(lista.toString()[6]);          //traz a sexta letra na sequencia de string
console.log(lista.join(" - "))             // substitui a virgula por traço

// ------------------------------------------------------------------------
// DICIONÁRIO
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);

var frutas = [
    {nome:"maçã", cor:"vermelha"},
    {nome:"banana", cor:"amarela"},
    {nome:"laranja", cor:"laranja"},
    {nome:"pera", cor:"verde"}
]
console.log(frutas)

//------------------------------------------------------------------------
// CONDICIONAIS
var nome = prompt("Qual é o seu nome?")
var idade = prompt("Qual sua idade");
if(idade>=18){
    alert(nome + " você é maior de idade");
}else{
    alert(nome + " você é menor de idade");
}

//-------------------------------------------------------------------------
// LAÇOS DE REPETIÇÂO
    // WHILE
var count = 1;
while(count<=5){
    console.log(count);
    count++;
};

    // FOR
for (var i = 1;i<=5; i++){
    console.log(i);
}

//-------------------------------------------------------------------------
//DATA
var d = new Date();
alert(d.getMinutes());
alert(d.getDay())







