package com.avispas.popcollector.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avispas.popcollector.Models.ProductosModel;
import com.avispas.popcollector.Repository.ProductosRepository;

@Service
public class ProductosService {
    @Autowired
    ProductosRepository productosRepo;

    public ArrayList<ProductosModel> getAllProductos() {
        return (ArrayList<ProductosModel>) productosRepo.findAll();
    }

    public ProductosModel postProductos(ProductosModel productos) {
        return productosRepo.save(productos);
    }

    public String putProductos(Long id, ProductosModel producto) {
        if (producto.getCodigo() == null || producto.getCodigo() == 0) {
            return "El valor del codigo es incorrecto";
        } else if (producto.getName() == null || producto.getName().isEmpty()) {
            return "El campo nombre esta vacío";
        } else if (producto.getDescription() == null ||
                producto.getDescription().isEmpty()) {
            return "El campo descripción esta vacío";
        } else if (producto.getImg() == null || producto.getImg().isEmpty()) {
            return "Agrega una imagen";
        } else if (producto.getPrecio() == null || producto.getPrecio() <= 0) {
            return "Ingresa un precio mayor";
        } else if (producto.getCantidad() == null) {
            return "El campo Cantidad esta vacío";
        } else {

            Optional<ProductosModel> objProducto = productosRepo.findById(id);
            ProductosModel produModel = objProducto.get();
            produModel.setName(producto.getName());
            produModel.setDescription(producto.getDescription());
            produModel.setImg(producto.getImg());
            produModel.setImg2(producto.getImg2());
            produModel.setImg3(producto.getImg3());
            produModel.setCodigo(producto.getCodigo());
            produModel.setPrecio(producto.getPrecio());
            produModel.setCantidad(producto.getCantidad());
            produModel.setCertificado(producto.getCertificado());
            produModel.setExclusivo(producto.getExclusivo());
            produModel.setCategorias_idCategorias(producto.getCategorias_idCategorias());

            productosRepo.save(produModel);
            return "Cambios guardados";
        }
    }// updateProducto

    public Optional<ProductosModel> getIdProductos(Long id) {
        return productosRepo.findById(id);
    }

    // public Optional<ProductosModel> getCodigo(Long codigo) {
    // return productosRepo.getCodigo(codigo);
    // }

    public boolean deleteProductos(Long id) {
        try {
            productosRepo.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }
}
