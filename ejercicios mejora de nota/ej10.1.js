// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var edad = new Number();
	var suma = new Number();
	var x = new Number();
	var n = new Number();
	var promedio = new Number();
	document.write("ingrese el numero de alumnos",'<BR/>');
	n = Number(prompt());
	x = 1;
	suma = 0;
	promedio = 0;
	while (x<-n) {
		document.write("ingresa una edad",'<BR/>');
		edad = Number(prompt());
		suma = suma+edad;
		x = x+1;
	}
	promedio = suma+edad/n;
	document.write("el promedio de edades es: ",promedio,'<BR/>');
}

