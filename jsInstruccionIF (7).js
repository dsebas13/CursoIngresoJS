function Mostrar()
{var edad;
var estado;

	edad= document.getElementById('edad'). value;
	estado= document.getElementById('estadoCivil'). value;
	if (edad < 18) 
	{
		if (estado != "Soltero")
			alert("Es muy pequeño para NO ser Soltero");

	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN