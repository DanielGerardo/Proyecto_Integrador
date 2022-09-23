package com.avispas.popcollector.Services;


import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avispas.popcollector.Models.CategoriasModel;
import com.avispas.popcollector.Repository.CategoriasRepository;

@Service
public class CategoriasService {
	@Autowired
	CategoriasRepository categoriasRepo;
	
	//Método GET para traer todas las categorias
	public ArrayList<CategoriasModel> getAllCategorias() {
		 return (ArrayList<CategoriasModel>) categoriasRepo.findAll();
	}

	//Método GET para traer una categoría por ID
	public Optional<CategoriasModel> getIdCategorias(Long id) {
		 return categoriasRepo.findById(id);
	}
	
	//Metodo POST para agregar una categoría
	public CategoriasModel postCategorias(CategoriasModel categoria) {
		return categoriasRepo.save(categoria);
	}

	//Método PUT para modificar una categoría
	public String putCategorias(Long id, CategoriasModel categoria) {
		if (categoria.getNombre() == null || categoria.getNombre().isEmpty() ) {
			return "El campo nombre esta vacío";
		} else {
			categoria.setIdCategorias(id);
			categoriasRepo.save(categoria);
			return "Se han guardado los cambios";
		}//else
	}//PUT

	//Método DELETE para borrar categorias
	public void deleteCategorias(Long id) {
		if(categoriasRepo.existsById(id)) {
			categoriasRepo.deleteById(id);
		}//if
		
	}



}
