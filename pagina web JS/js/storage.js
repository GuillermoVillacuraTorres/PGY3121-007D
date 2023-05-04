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

