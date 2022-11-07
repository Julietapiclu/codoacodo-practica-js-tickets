const TICKET = 200
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let mail = document.querySelector("#mail");
let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
let cantidadTickets = document.querySelector("#cantidadTickets");
let totalPago = document.querySelector("#totalPago");
let categoriaSelect = document.querySelector("#categoriaSelect");
let btnResumen =document.querySelector("#btnResumen");
let btnBorrar =document.querySelector("#btnBorrar");

//validar Email
function validarEmail(){            
	if( validEmail.test(mail.value) ){
		return true;
	}else{
		alert("Email invalido, por favor ingrese un mail valido");
		return false;
	}
} 

//calculo de descuentos
function Resumen(){
    if (cantidadTickets.value < 0 || (cantidadTickets.value != parseInt(cantidadTickets.value))) {
        alert("Ingrese en 'Cantidad' un numero positivo y entero");
        totalPago.textContent = "";
    }else{
        switch (categoriaSelect.value){
            case '0':
                totalPago.textContent = parseInt(cantidadTickets.value) * TICKET;
            break;
            case '1':
                totalPago.textContent = parseInt(cantidadTickets.value) * TICKET * 0.2;
            break;
            case '2':
                totalPago.textContent = parseInt(cantidadTickets.value) * TICKET * 0.5;
            break;
            case '3':
                totalPago.textContent = parseInt(cantidadTickets.value) * TICKET * 0.85;
            break;
        }
    }
}

//Borrar el formulario
function Borrar(){
    nombre.value = "";
    apellido.value = "";
    mail.value = "";
    cantidadTickets.value = "";
    categoriaSelect.value = "0";
    totalPago.textContent = "";
}

mail.addEventListener("click", validarEmail);

btnResumen.addEventListener("click", Resumen);

btnBorrar.addEventListener("click", Borrar);