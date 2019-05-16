/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var nombre = prompt("¿Como te llamas?");
while(nombre == null || nombre == "" ){
	nombre = prompt("¿Como te llamas?");
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var escuela = prompt("¿En que escuela estas?");
while(escuela == null || escuela == ""){
	escuela = prompt("¿En que escuela estas?");
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var semestre = prompt("¿En que semestre estas?");

while(semestre == null || semestre == ""){
	semestre = prompt("¿En cuál semestre te encuentras actualmente?");
	}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Grupo = prompt("¿En cuál grupo te encuentras actualmente?")

while( Grupo == null || Grupo == NaN || Grupo == "" || Grupo >= 1000){
	Grupo = prompt("¿En cuál grupo te encuentras actualmente?");
}

alert("Bienvenido " + nombre + " espero que te la estes pasando bien en " + escuela + " .");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var confirmgroup = confirm("Al parecer eres del grupo " + Grupo + "\n ¿Es esto correcto? \n Aceptar = ¡ Claro que si ! \n Cancelar = ¡Claro que no, dejame escribo otravez mi grupo!")

if (confirmgroup == false ) {
Grupo = prompt("¿De cual grupo eres miembro actualmente?")
alert("¡Espero que te la pases bien!  :3")
}
else{
	alert("¡Espero que te la pases bien! :3")
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
document.getElementById("escuela").innerHTML = "Escuela: " + escuela;
document.getElementById("semestre").innerHTML = "Semestre: " + semestre;
document.getElementById("Grupo").innerHTML = "Grupo:" + Grupo;
$( "#target" ).click(function() {
  document.URL("index2.html");
});