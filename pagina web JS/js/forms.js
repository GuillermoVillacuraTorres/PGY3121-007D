function validarForm(){
    let txtRut = document.getElementById("txtRut").value;
    let txtNombre = document.getElementById("txtNombre").value;
    let txtApellido = document.getElementById("txtApellido").value;

    if (txtRut.length == 0) {
        alert("Debe ingresar su rut.");
        return;
    }
    if (txtNombre.length == 0) {
        alert("Debe ingresar su nombre.");
        return;
    }
    if (txtApellido.length == 0) {
        alert("Debe ingresar su apellido.");
        return;
    }
}