package com.avispas.popcollector.Controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.avispas.popcollector.Models.ProductosModel;
import com.avispas.popcollector.Services.ProductosService;

@RestController
@RequestMapping("/producto")
@CrossOrigin("*")
public class ProductosController {

    @Autowired
    ProductosService productosServices;

    @GetMapping(value = "/getAll")
    public ArrayList<ProductosModel> getAllProductos() {
        return this.productosServices.getAllProductos();
    }

    @PostMapping
    public ProductosModel postProductos(@RequestBody ProductosModel producto) {
        return this.productosServices.postProductos(producto);
    }

    @GetMapping(path = "/{id}")
    public Optional<ProductosModel> getIdProductos(@PathVariable("id") Long id) {
        return this.productosServices.getIdProductos(id);
    }

    @PutMapping(path = "/{id}")
    public String putProductos(@PathVariable("id") Long id, @RequestBody ProductosModel producto) {
        return this.productosServices.putProductos(id, producto);
    }

    // @GetMapping("/query")
    // public Optional<ProductosModel> getCodigo(@RequestParam("codigo") Long
    // codigo) {
    // return this.productosServices.getCodigo(codigo);
    // }

    @DeleteMapping(path = "/{id}")
    public String deleteProductos(@PathVariable("id") Long id) {
        boolean ok = this.productosServices.deleteProductos(id);
        if (ok) {
            return "Se eliminó el Producto con id :" + id;
        } else {
            return "No pudo eliminar el Producto con id :" + id;
        }
    }
}
