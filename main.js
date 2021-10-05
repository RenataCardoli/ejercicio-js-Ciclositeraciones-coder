var texto = prompt("Ingrese un texto");
var resultado = texto;

var textoConcatenar =" ";

while (textoConcatenar != 3 ){
    textoConcatenar = prompt("ingrese otro texto");
    resultado = resultado + " " + textoConcatenar;
    console.log(resultado);
}