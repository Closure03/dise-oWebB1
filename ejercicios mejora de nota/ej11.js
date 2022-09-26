//-------------------------Ejercicio 11----------------------------
function precioindividual() {
	var cantidad, precio, total_con_iva, total_sin_iva;
	document.write("Ingrese precio individual: ",'<BR/>');
	precio = Number(prompt());
	document.write("Ingrese cantidad a comprar: ",'<BR/>');
	cantidad = Number(prompt());
	total_sin_iva = precio*cantidad;
	total_con_iva = total_sin_iva*1.127;
	document.write("Total sin iva: ",total_sin_iva,'<BR/>');
	document.write("Total con iva: ",total_con_iva,'<BR/>');
}

