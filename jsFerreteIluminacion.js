/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{var lamparitas;
var precio=35;
var descuento;
var marca;
var ibrutos;

lamparitas= document.getElementById('Cantidad'). value;
marca= document.getElementById('Marca'). value;

if (lamparitas >= 6) 
{
	//alert(6);
	
	descuento= (lamparitas*precio)*0.50
//	document.getElementById('precioDescuento'). value= descuento;
}
else 

if (lamparitas == 4) 
{
	if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
	{
		descuento= (lamparitas*precio)*0.75
	//	document.getElementById('precioDescuento'). value= descuento;
	}
	else
		descuento= (lamparitas*precio)*0.80
	///	document.getElementById('precioDescuento'). value= descuento;
}


{
	if (lamparitas =="5") 
		if (marca == "ArgentinaLuz")
			{descuento= (lamparitas*precio)*0.60
		///	document.getElementById('precioDescuento'). value= descuento;
		///alert("marca")
		}
		else
		{//alert("8");
		descuento= (lamparitas*precio)*0.70
		///document.getElementById('precioDescuento'). value= descuento;
		}
	////descuento= ((lamparitas*precio)*0.30)-(lamparitas)
	///document.getElementById('precioDescuento'). value= descuento;
	
	//else
	//descuento= (lamparitas*precio)-((lamparitas*precio)*0.30)
	//document.getElementById('precioDescuento'). value= descuento;
	///alert("5");
	
}

///if (lamparitas =="4") 
	///	if (marca == "ArgentinaLuz")
		//	{descuento= (lamparitas*precio)-((lamparitas*precio)*0.25)
		//	document.getElementById('precioDescuento'). value= descuento;
		///alert("marca")
//		}
///		else
	//	{//alert("8");
	///	descuento= (lamparitas*precio)-((lamparitas*precio)*0.20)
		//document.getElementById('precioDescuento'). value= descuento;
///		}

if (lamparitas =="3") 
		if (marca == "ArgentinaLuz")
			{descuento= (lamparitas*precio)*0.85
			//document.getElementById('precioDescuento'). value= descuento;
		///alert("marca")
		}
		else

		if (marca == "FelipeLamparas") 
		{
			descuento= (lamparitas*precio)*0.90
		//	document.getElementById('precioDescuento'). value= descuento;
		}
		else
			descuento= (lamparitas*precio)*0.95
			//document.getElementById('precioDescuento'). value= descuento;
//		{//alert("8");
//		descuento= (lamparitas*precio)-((lamparitas*precio)*0.5)
//		document.getElementById('precioDescuento'). value= descuento;
//		}

if (descuento > 120) 
	{ibrutos= descuento*0.10
	document.getElementById('precioDescuento'). value= (descuento);
	//var entero = ibrutos.toFixed();
	alert("IIBB Usted pago "+(descuento)+" , siendo "+Math.floor(ibrutos)+" el impuesto que se pagó")
}
else
	{
		document.getElementById('precioDescuento'). value= (descuento);
	}

/////////////////////hasta aca bien


}


