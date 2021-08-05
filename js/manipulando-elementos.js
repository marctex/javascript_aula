function clicar(){
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar.</i>"
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function paginaGoogle(){
    window.open("https://www.google.com.br/");
}

function meuLinkedin(){
    window.location.href = "https://www.linkedin.com/in/marcelo-teixeira-1390413a/";
}

function mouseSobre(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    // document.getElementById("mousesobre").innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse sobre";

}

function load(){
    alert("Página carregada!");
}

function escolha(elemento){
    console.log(elemento.value)
}