

function clicou(){
    document.getElementById("Agradecimento");
    console.log(document.getElementById("Agradecimento"));
    alert("Obrigado Por Clicar");
}

function redirecionar(){
    window.open("https://twitter.com/inimigodamente");
    window.location.href = "https://twitter.com/inimigodamente";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

 
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}


/*
function soma(n1,n2){
    return n1 + n2;
}

function validaidade(idade){
    if(idade>=18){
    var validar= true;
 
    }else{
        validar=false;
    }
return validar;
}
var idade = prompt("Qual e a sua idade");
console.log(validaidade(idade));

function setReplace(frase,nome,novo_nome){
  return   frase.replace(nome , novo_nome)
}
*\

//alert(soma(5,10));
/*
var d = new Date();
alert(d.getMonth());
alert(d.getHours());
alert(d.getDay());
*/

/*
var count;
for(count=0;count <=5; count ++){
    alert(count);
}
*\

/*
var count =5;
while(count <=5){
    console.log(count);
    count ++;

};
*/

/*
var idade = prompt("Qual sua idade?")
if(idade> 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*\
/*
var fruta=[{nome:"maçã", cor:"Vermelho"}  , {nome:"uva" , cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome);
*/

//var lista=["Maçã" , "pêra", "laranja"];
//lista.push("uva");
//lista.pop;
//console.log(lista[0]);
//console.log(lista.toString(4))
//console.log(lista.join(" - "));


/*
var nome="Breno Fellype";
var n1= 5;
var n2= 3;
var frase="Japão e o melhor Time Do Mundo";
/*alert( nome + " Tem " + idade + " anos " );*/
//alert(n1 + n2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão" , "Brasil")) ; 
