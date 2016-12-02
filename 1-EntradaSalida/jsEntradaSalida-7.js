/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	suma= numeroUno+numeroDos;
	alert(suma);
	
}

function restar()
{	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
	numeroUno= numeroUno;
	numeroDos= numeroDos;
	resta= numeroUno-numeroDos;
	alert(resta);
	////parseInt solo se utiliza para sumar
	
}

function multiplicar()
{	var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
	numeroUno= numeroUno;
	numeroDos= numeroDos;
	multiplicacion= numeroUno*numeroDos;
	alert(multiplicacion);

}

function dividir()
{	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;
	numeroUno= numeroUno;
	numeroDos= numeroDos;
	dividir= numeroUno/numeroDos;
	alert(dividir);
	
}

