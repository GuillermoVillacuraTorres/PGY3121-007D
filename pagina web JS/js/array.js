let miArray = [100,"Hola",200,true];
//console.log(miArray[1]);

for (const i of miArray) {
    // console.log(i);
    if (i == "Hola" ) {
       // console.log(i);
    }
}
let var1 = 1500;
miArray.push(var1);

miArray.unshift(5000);
//console.log(miArray);

let arrayDos = [];

function add(){
   
    let dato = document.getElementById("txtDato").value;

    arrayDos.push(dato);
    console.log("Array 2",arrayDos);
}


let miArrayTres = [
    {
        id:1,
        nombre:"Metropolitana"
    },
    {
        id:2,
        nombre:"Maule"
    },
    {
        id:3,
        nombre:"Atacama"
    }
];

miArrayTres.push({id:4,nombre:"Ñuble"});
miArrayTres.unshift({id:5,nombre:"Los Lagos"});

console.log(miArrayTres);

for (const j of miArrayTres) {
    //console.log(j);
}
