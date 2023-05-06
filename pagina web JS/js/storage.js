function load(){
    //crearStorage();
}

function crearStorage(){
    let array = [
        {
            rut:"12.123.123-0",
            nombre:"Juan",
            apellido:"Lopez"
        },
        {
            rut:"10.456.456-2",
            nombre:"Pedro",
            apellido:"Lopez"
        },        {
            rut:"45.789.489-5",
            nombre:"Luis",
            apellido:"Lopez"
        }
    ]
    console.log(array);
    
    const obj = JSON.stringify(array);
    console.log(obj);
    localStorage.setItem("myStorage",obj);
    console.log("Storage creado");
}

function obtenerStorage(){
    const storage = localStorage.getItem("myStorage");
    const obj = JSON.parse(storage);
    console.log("GET STORAGE:", obj );
}

function eliminarStorage(){
    localStorage.removeItem("myStorage");
    console.log("Storage eliminado");
}


function eliminarUnoStorage(){
    let valor = document.getElementById("txtRut").value;
    let pesoArray;
    //console.log(new Blob(pesoArray).size);
    let storage = JSON.parse(localStorage.getItem("myStorage"));
    pesoArray = new Blob([JSON.stringify(storage)]).size;
    //console.log("SIZE", pesoArray);
    console.log("STORAGE", storage);
    let arrayTemporal = [];
    let filtro = storage.filter(e => e.rut == valor);
    console.log("Filtro",filtro);
    if (filtro.length == 0) {
        alert("Rut no encontrado!!!");
    }else{
        for (const i of storage) {
            if (i.rut != valor) {
                arrayTemporal.push(i);
            }
        }
    
        console.log("Array temporal",arrayTemporal);
            localStorage.setItem("myStorage",JSON.stringify(arrayTemporal));    
    }


}