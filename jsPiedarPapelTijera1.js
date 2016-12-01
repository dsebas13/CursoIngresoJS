/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{eleccionMaquina = Math.floor((Math.random())*3)+1;
	///alert("el resultado "+eleccionMaquina+" es");



}//FIN DE LA FUNCIÓN
function piedra()
{//var juego;
	//juego = 1;
	if (eleccionMaquina == 1) 
	{
		alert("EMPATO");
	}
	else if (eleccionMaquina == 2) 
	{
		alert("PERDIO");

	}
	else
		alert("GANO");
	comenzar()
	//function comenzar()

	

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 2) 
	{
		alert("EMPATO");
	}
	else if (eleccionMaquina == 3) 
	{
		alert("PERDIO");

	}
	else
		alert("GANO");
	comenzar()


}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 3) 
	{
		alert("EMPATO");
	}
	else if (eleccionMaquina == 1) 
	{
		alert("PERDIO");

	}
	else
		alert("GANO");
	comenzar()
	

}//FIN DE LA FUNCIÓN