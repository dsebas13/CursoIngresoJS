function Mostrar()
{var edad;

	edad= document.getElementById('edad'). value;
	if (edad >=18) 
	{
		alert("Es mayor de edad, tiene "+edad+" años")
	}
	else
	{
		if (edad >=13 && edad <= 17)
		{
		//	if (edad <= 17)
				alert("Es adolecente, tiene "+edad+" años")
		}
			
		else
			alert("Es un niño, tiene "+edad+" años")
		
	}

		
	
	//	alert("Es un niño, tiene "+edad+" años")
	
//tomo la edad  




}//FIN DE LA FUNCIÓN