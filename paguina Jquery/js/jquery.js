$(document).ready(function(){
    
})

$(function(){
    $("p").css({"background-color" : "blue"});
    $(".primero").css({"background-color" : "red"});
    $("#tercero").css({"background-color" : "green"});
})


$("#ocultar").on("click",function(){
    //$(".primero").hide();
    //$(".primero").fadeOut();
    $(".primero").slideUp();
})


$("#mostrar ").on("click",function(){
    //$(".primero").show();
    //$(".primero").fadeIn();
    $(".primero").slideDown();
})


$("#texto").on("click",function(){
    //$(".primero").text("Bienvenidos!");
    //$(".primero").html("<strong>Bienvenidos!!!</strong>");
    //$(".primero").append("<strong>Bienvenidos!!!</strong>")
    $(".primero").prepend("<strong>Inicio!!!</strong>")
})



$("#texto").on("click",function(){
    let valor = $("#txtValor").val();
    console.log(valor);
});


$(function(){
    $("#miFormulario").validate({
        rules:{
            txtRut:{
                required: true,
                minlength:10
            },
            txtNombre:{
                required: true,
                minlength:10
            },
            txtApellido:{
                required: true,
                minlength:10
            },
            txtCorreo:{
                required: true,
                minlength:10,
                email:true
            }
        },
        messages:{
            txtRut:{
                required: "Debe ingresar un rut",
                minlength: "El largo minimo es 10"
            },
        }
    })
})



$.getJSON('https://mindicador.cl/api', function(data){
    console.log(data);
}).fail(function(){
    console.error("Error al consumir la API");
})