
var esMayor= ()=>{
    var usuarios = [];
    var edades = [];
    for(var i=0; i<3; i++){
        usuarios[i]= prompt("Ingrese su nombre");
        edades[i]= Number(prompt("Ingrese su edad"));
    }
    if(edades[0]>edades[1] && edades[0]>edades[2]){
        alert(usuarios[0] + " es el mayor");
    } else if (edades[1]>edades[0] && edades[1]>edades[2]){
        alert(usuarios[1] + " es el mayor");
    } else if (edades[2]>edades[0] && edades[2]>edades[1]){
        alert(usuarios[2] + " es el mayor");
    }
}
esMayor();

