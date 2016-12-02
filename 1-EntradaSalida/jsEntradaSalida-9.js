/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var numeroUno;
	//var numeroDos;
	var porcentaje;
	///var aumento;
	var precioFinal;

	numeroUno= document.getElementById('sueldo').value;
	//numeroDos= document.getElementById('resultado').value;
	numeroUno= parseInt(numeroUno);
	//numeroDos= parseInt(numeroDos);
	///porcentaje= numeroUno+numeroDos;
	
	///aumento=numeroUno*0,21;
	precioFinal=numeroUno*1.21;
	
	document.getElementById("resultado").value=precioFinal;
//// 400%
//// 
///var mitext;
///mitexto=prompt("por favor ingrese un texto");
///document.getElementById("elNombre"). value=mitexto;
	
}
