from django.shortcuts import render
from .models import *
# Create your views here.


def cargarInicio(request):
    productos = Producto.objects.all()
    categoria_perros = Producto.objects.filter(id_categoria = 1)
    categoria_gatos = Producto.objects.filter(id_categoria = 2)
    return render(request,"inicio.html",{"prod":productos,"cate_gatos":categoria_gatos,"cate_perros":categoria_perros})
    


def cargarAgregarProducto(request):
    categorias = Categoria.objects.all()
    return render(request,"agregarProducto.html",{"cate":categorias})