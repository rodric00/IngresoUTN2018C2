function mostrar()

do
{	
	numero=parseInt(prompt("Ingrese un mumero"));
	contador++
	
	if (contador==1)
{
		maximo=numero;
		minimo=numero;
}
	
	
	if (numero>maximo)
{
	maximo=numero;

}


    if (numero<minimo)
{

	minimo=numero;

}

respuesta=prompt("desea continuar"); 

while (respuesta=="si");

document.getElementById("maximo").value=maximo;

document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN