/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	
	var unaVariable="datos";
	console.log("primer mensaje")
	var otraVariable
	console.info("mensaje:",unaVariable);

	var miNombre;
	var miEdad;
	miNombre= document.getElementById('elNombre'). value;
	miEdad = document.getElementById('laEdad'). value;
  console.info("linea final:",unaVariable);
alert("Usted se llama "+miNombre+" y tiene "+miEdad+" años");
}