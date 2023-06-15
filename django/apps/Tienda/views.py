from django.shortcuts import render, redirect
from .models import *
# Create your views here.


def cargarInicio(request):
    productos = Producto.objects.all()
    categoria_perros = Producto.objects.filter(id_categoria = 1)
    categoria_gatos = Producto.objects.filter(id_categoria = 2)
    return render(request,"inicio.html",{"prod":productos,"cate_gatos":categoria_gatos,"cate_perros":categoria_perros})
    


def cargarAgregarProducto(request):
    categorias = Categoria.objects.all()
    productos = Producto.objects.all()
    return render(request,"agregarProducto.html",{"cate":categorias, "prod":productos})


def agregarProducto(request):
    #print("PRODUCTO AGREGAR", request.POST)

    v_sku = request.POST['txtSku']
    v_nombre = request.POST['txtNombre']
    v_stock = request.POST['txtStock']
    v_precio = request.POST['txtPrecio']
    v_descripcion = request.POST['txtDescripcion']
    v_img = request.FILES['txtImg']
    v_categoria = Categoria.objects.get(id_categoria = request.POST['cmbCategoria'])

    Producto.objects.create(sku = v_sku,nombre = v_nombre,stock = v_stock,precio = v_precio,descripcion = v_descripcion, id_categoria = v_categoria, imagen_url = v_img)        

    return redirect('/agregarProducto')



def cargarEditarProducto(request,sku):
    productos = Producto.objects.get(sku = sku)
    return render(request,"editarProducto.html",{"prod":productos})