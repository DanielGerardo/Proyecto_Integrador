package com.avispas.popcollector.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="categorias")

public class CategoriasModel {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "idCategorias")
private Long idCategorias;
@Column(name = "nombre")
private String nombre;

//constructor vacío
public CategoriasModel() {
    super();
}

//Getters y Setters
public Long getIdCategorias() {
	return idCategorias;
}

public void setIdCategorias(Long idCategorias) {
	this.idCategorias = idCategorias;
}

public String getNombre() {
	return nombre;
}

public void setNombre(String nombre) {
	this.nombre = nombre;
}

}//CategoriaModels
