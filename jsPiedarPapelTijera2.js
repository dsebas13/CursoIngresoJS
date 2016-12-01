var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random())*3)+1;
	//Genero el número RANDOM entre 1 y 3


}


//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == 1) 
	{
		alert("EMPATO");
		ContadorDeEmpates++;		
	}
	else if (eleccionMaquina == 2) 
	{
		alert("PERDIO");
		ContadorDePerdidas++;
	}
	else
	{	alert("GANO");
		ContadorDeGanadas++;
	}
	mostarResultado()
	

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 2) 
	{
		alert("EMPATO");
		ContadorDeEmpates++;	
	}
	else if (eleccionMaquina == 3) 
	{
		alert("PERDIO");
		ContadorDePerdidas++;
	}
	else
	{	alert("GANO");
		ContadorDeGanadas++;
	}

	mostarResultado()	
	
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 3) 
	{
		alert("EMPATO");
		ContadorDeEmpates++;
	}
	else if (eleccionMaquina == 1) 
	{
		alert("PERDIO");
		ContadorDePerdidas++;	
	}
	else
	{	alert("GANO");
		ContadorDeGanadas++;
	}	

	mostarResultado()	
	
	
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

	document.getElementById('empatadas'). value= ContadorDeEmpates+ " EMPATADAS ";
	document.getElementById('perdidas'). value= ContadorDePerdidas+ " PERDIDAS ";
	document.getElementById('ganadas'). value= ContadorDeGanadas+ " GANADAS ";

	comenzar()
}