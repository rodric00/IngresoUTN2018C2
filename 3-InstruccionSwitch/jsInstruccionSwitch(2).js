function mostrar()
{
//tomo la edad  

var mesdelaño 
mesdelaño=document.getElementById("mes").value;

switch (mesdelaño){

    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert ("falta para el invierno");          
    break;
    
    case "Julio": 
    case "Agosto":
    alert ("Abrigate que hace frio");
    break;

    default: 
    alert ("ya paso el frio, ahora calor");
    break;
 }
    
}

       







//FIN DE LA FUNCIÓN