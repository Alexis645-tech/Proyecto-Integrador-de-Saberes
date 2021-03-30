let b1 = document.getElementsByTagName("button");

function verdadero() {
	if (b1 == MAMA) {
		document.querySelector(".correcto").style.display = "flex";
	}else {
		document.querySelector(".incorrecto").style.display = "flex";
	}
}