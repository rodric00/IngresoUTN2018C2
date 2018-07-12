function mostrar()
{

var numero1;
var numero2;
var resultado;

numero1=prompt("Ingrese numero1");
numero2=prompt("Ingrese numero2");

numero1=parseInt(numero1);
numero2=parseInt(numero2);


if (numero1==numero2)
{
    alert(numero1.toString()+numero2);
}
else if (numero1>numero2)
{ 
    alert(numero1-numero2);
}
else
{
    resultado=numero1+numero2;

    if  (resultado>10)
{
    alert ("la suma es "+ resultado + " y supero el 10");
}
    else
{
alert(numero1+numero2);
}

}
}