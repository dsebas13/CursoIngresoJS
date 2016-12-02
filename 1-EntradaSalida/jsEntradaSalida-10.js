/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var aumento;
	aumento= document.getElementById('importe'). value;
	aumento = parseInt(aumento);
	aumento = aumento - (aumento * 0.25);
	document.getElementById('resultado'). value= aumento;
}
