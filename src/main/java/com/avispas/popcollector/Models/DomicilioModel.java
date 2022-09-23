package com.avispas.popcollector.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "direccion")
public class DomicilioModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idDireccion")
	private Long idDireccion;
	@Column(name="calle")
	private String calle;
	@Column(name="numExt")
	private Long numExt;
	@Column(name="colonia")
	private String colonia;
	@Column(name="municipio")
	private String municipio;
	@Column(name="estado")
	private String estado;
	@Column(name="cp")
	private Long cp;
	@Column(name="telefono")
	private Long telefono;
	@Column(name="Usuarios_idUsuarios")
	private Long usuarios_idUsuarios;
	
	//Constructor vacio
	public DomicilioModel() {
		super();
	}

	public Long getIdDireccion() {
		return idDireccion;
	}

	public String getCalle() {
		return calle;
	}

	public Long getNumExt() {
		return numExt;
	}

	public String getColonia() {
		return colonia;
	}

	public String getMunicipio() {
		return municipio;
	}

	public String getEstado() {
		return estado;
	}

	public Long getCp() {
		return cp;
	}

	public Long getTelefono() {
		return telefono;
	}

	public Long getUsuarios_idUsuarios() {
		return usuarios_idUsuarios;
	}

	public void setUsuarios_idUsuarios(Long usuarios_idUsuarios) {
		this.usuarios_idUsuarios = usuarios_idUsuarios;
	}

	public void setIdDireccion(Long idDireccion) {
		this.idDireccion = idDireccion;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public void setNumExt(Long numExt) {
		this.numExt = numExt;
	}

	public void setColonia(String colonia) {
		this.colonia = colonia;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public void setCp(Long cp) {
		this.cp = cp;
	}

	public void setTelefono(Long telefono) {
		this.telefono = telefono;
	}


}//DomicilioModel
