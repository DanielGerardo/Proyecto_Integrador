package com.avispas.popcollector.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Usuarios")

public class UsuariosModel {
	
//Atributos 
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
    @Column(name = "idUsuarios")
    private Long idUsuarios;
	
    @Column(name = "nombre")
    private String nombre;
    
    @Column(name = "apellido")
    private String apellido;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "contra")
    private String contra;
    
    @Column(name = "fechaIngreso")
    private String fechaIngreso;
    
    
//constructor vacío 
    public UsuariosModel() {
    	super();
	}//constructor vacío

 
//constructor
	public UsuariosModel(Long idUsuarios, String nombre, String apellido, String email, String contra,
			String fechaIngreso) {
		super();
		this.idUsuarios = idUsuarios;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.contra = contra;
		this.fechaIngreso = fechaIngreso;
	}//constructor

//Getters y Setters

	//idUsuarios
	public Long getIdUsuarios() {return idUsuarios;}
	public void setIdUsuarios(Long idUsuarios) {this.idUsuarios = idUsuarios;}
	
	//nombre
	public String getNombre() {return nombre;}
	public void setNombre(String nombre) {this.nombre = nombre;}
	
	//apellido
	public String getApellido() {return apellido;}
	public void setApellido(String apellido) {this.apellido = apellido;}
	
	//email
	public String getEmail() {return email;}
	public void setEmail(String email) {this.email = email;}
	
	//contra
	public String getContra() {return contra;}
	public void setContra(String contra) {this.contra = contra;}
	
	//fechaIngreso
	public String getFechaIngreso() {return fechaIngreso;}
	public void setFechaIngreso(String fechaIngreso) {this.fechaIngreso = fechaIngreso;}

//toString
	@Override
	public String toString() {
		return "UsuariosModel [idUsuarios=" + idUsuarios + ", nombre=" + nombre + ", apellido=" + apellido + ", email="
				+ email + ", contra=" + contra + ", fechaIngreso=" + fechaIngreso + "]";
	}//toString

}//class UsuariosModels
