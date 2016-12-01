/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var radio;
	var rectangulo;
	
	largo= document.getElementById('Largo'). value;
	ancho= document.getElementById('Ancho'). value;
	radio= document.getElementById('Radio'). value;
	
	largo= parseInt(largo);
	ancho= parseInt(ancho);
	radio= parseInt(radio);

	rectangulo=((largo*ancho)*2)*3;
	alert(rectangulo);

	//suma= (precioUno+precioDos+precioTres)*1.21;
	///alert(suma);

}
function Circulo () 
{var radio;
var circulo;
	radio= document.getElementById('Radio'). value;
	circulo=((radio*3.14)*3);
	alert(circulo);
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;
	
	largo= document.getElementById('Largo'). value;
	ancho= document.getElementById('Ancho'). value;
	
	largo= parseInt(largo);
	ancho= parseInt(ancho);

	cemento=((largo*ancho)*2)*2;
	cal=((largo*ancho)*2)*3;
	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" de cal");


/// 1x1 2 cem y 3 cal
}