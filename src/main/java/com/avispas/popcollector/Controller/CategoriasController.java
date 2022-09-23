package com.avispas.popcollector.Controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avispas.popcollector.Models.CategoriasModel;
import com.avispas.popcollector.Services.CategoriasService;

@RestController
@RequestMapping(path = "/categoria")
@CrossOrigin("*")
public class CategoriasController {

	@Autowired
	CategoriasService categoriasServices;

	// Para mostrar todas las categorías
	@GetMapping(value = "/getAll")
	public ArrayList<CategoriasModel> getAllCategorias() {
		return this.categoriasServices.getAllCategorias();
	}

	// Para mostrar categoría por id
	@GetMapping(path = "/{id}")
	public Optional<CategoriasModel> getIdCategorias(@PathVariable("id") Long id) {
		return this.categoriasServices.getIdCategorias(id);
	}

	// Para agregar nueva categoría
	@PostMapping
	public CategoriasModel postCategorias(@RequestBody CategoriasModel categoria) {
		return this.categoriasServices.postCategorias(categoria);
	}

	// Para modificar una categoria
	@PutMapping(path = "/{id}")
	public String putCategorias(@PathVariable("id") Long id, @RequestBody CategoriasModel categoria) {
		return this.categoriasServices.putCategorias(id, categoria);
	}

	// Para borrar una categoría por ID
	@DeleteMapping(path = "{id}")
	public void deleteCategorias(@PathVariable("id") Long id) {
		categoriasServices.deleteCategorias(id);
	}

}
