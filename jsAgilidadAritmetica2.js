/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var numerouno;
var numerodos;
var simbolo;
var cuenta;

///Responder()
function comenzar()
{clearTimeout(temporizador);

numerouno= Math.floor((Math.random())*10)+1;
numerodos= Math.floor((Math.random())*10)+1;
simbolo= Math.floor((Math.random())*4)+1;
numerouno= parseInt(numerouno);
numerodos= parseInt(numerodos);
 switch (simbolo) {
 	case 1:
 		simbolo= "+";
 		cuenta= numerouno + numerodos;
 		//alert(cuenta);
 		break;
 	case 2:
 		simbolo= "-";
 		cuenta= numerouno - numerodos;
 		//alert(cuenta);
 		break;
 	case 3:
 		simbolo= "*";
 		cuenta= numerouno * numerodos;
 		//alert(cuenta);
 		break;
 	case 4:
 		simbolo= "/";
 		cuenta= numerouno / numerodos;
 		//alert(cuenta);
 		break;
 }
	
document.getElementById('PrimerNumero'). value= numerouno;
document.getElementById('SegundoNumero'). value= numerodos;
document.getElementById('Operador'). value= simbolo;
temporizador= setTimeout(function(){ alert("Termino el tiempo"); Responder() }, 8000);
///alert(temporizador);
}//FIN DE LA FUNCIÓN
function Responder()
{respuesta =document.getElementById('Respuesta'). value;
//alert(cuenta);
///alert(respuesta);
if (respuesta==cuenta) 
{
	alert("Ha acertado");
}
	else
	{	alert("Vuelva a intentarlo");
	}
document.getElementById('PrimerNumero'). value= "";
document.getElementById('SegundoNumero'). value= "";
document.getElementById('Respuesta'). value= "";
document.getElementById('Operador'). value= "";
comenzar();





}//FIN DE LA FUNCIÓN
