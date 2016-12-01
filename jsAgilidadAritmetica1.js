/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primernumero;
var segundonumero;
function comenzar()
{document.getElementById('PrimerNumero'). value= "";
 document.getElementById('Operador'). value= "";
 document.getElementById('SegundoNumero'). value= "";
 document.getElementById('Respuesta'). value= "";
 var randomuno; 
 var randomdos;
 var operacion;
 var cuenta;
 randomuno= Math.floor((Math.random())*10) + 1;
 randomdos= Math.floor((Math.random())*10) + 1;
 operacion= Math.floor((Math.random())*4) + 1;
 /// alert(random)



 primernumero= randomuno;
 segundonumero= randomdos;
 primernumero = parseInt(primernumero);
 segundonumero = parseInt(segundonumero);

 switch	(operacion) {
 	case 1:
 		cuenta= "+";
 		respuesta= primernumero + segundonumero;
 		//alert(respuesta);
 		break;
 	case 2:
 		cuenta= "-";
 		respuesta= primernumero - segundonumero;
 		//alert(respuesta);
 		break
 	case 3:
 		cuenta= "*";
 		respuesta= primernumero * segundonumero;
 		//alert(respuesta);
 		break
 	case 4:
 		cuenta= "/";
 		respuesta= primernumero / segundonumero;
 		//alert(respuesta);
 		break
 }

 document.getElementById('PrimerNumero'). value= randomuno;
 document.getElementById('Operador'). value= cuenta;
 document.getElementById('SegundoNumero'). value= randomdos;

 	



	

}//FIN DE LA FUNCIÓN
function Responder()
{
var usuario;
usuario = document.getElementById('Respuesta'). value;
if (usuario != 0) 
{

if (usuario == respuesta) 
{
	alert("Ha acertado la respuesta");
	comenzar();

}
else
{	alert("Vuelva a intentarlo");
}	comenzar();
}
else
	alert("ingrese valor");
	
	

}//FIN DE LA FUNCIÓN
