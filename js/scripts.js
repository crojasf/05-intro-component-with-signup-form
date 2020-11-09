// alert("hola mundo!!");


function validarCampos() {
	esVacio('firstName');
	esVacio('lastName');
	validarEmail('emailAddress');
	esVacio('password');
}

// toogle class: field > element  //  status: true | false
function isError(field, status) {
	
	if (status) {
		// console.log('SI es error');
		field.classList.add('has-error');
		field.parentElement.lastChild.classList.remove('hidden');	
		field.parentElement.parentElement.childNodes[3].classList.remove('hidden');	
	} else {
		// console.log('NO es error');
		field.classList.remove('has-error');
		field.parentElement.lastChild.classList.add('hidden');	
		field.parentElement.parentElement.childNodes[3].classList.add('hidden');
	}
}


function esVacio(fieldId) {

	var field = document.getElementById(fieldId);
	field.value == "" ? isError(field, true) : isError(field, false);
	// console.log(field)
}


function validarEmail(fieldId) {

	const MAIL_EXPREG = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	let field = document.getElementById(fieldId);

	!MAIL_EXPREG.test(field.value) ? isError(field, true) : isError(field, false);
	// console.log(!MAIL_EXPREG.test(field.value))
}



document.getElementById('formBtnSubmit').addEventListener("click", validarCampos);
