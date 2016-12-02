/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{//// para sacar resto 
	var numeroUno;
	var numeroDos;
	var resto;
	var cociente;


	numeroUno= document.getElementById('numeroDividendo').value;
	numeroDos= document.getElementById('numeroDivisor').value;
	//numeroUno= parseInt(numeroDividendo);
	//numeroDos= parseInt(numeroDivisor);
	//alert(numeroUno);
	//alert(numeroDos);
	resto= (numeroUno/numeroDos);
	cociente= (numeroUno/numeroDos) - resto;

	//alert(resto);
	alert(" El resto es "+cociente);
	
}
