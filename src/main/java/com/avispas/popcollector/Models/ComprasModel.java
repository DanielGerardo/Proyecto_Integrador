package com.avispas.popcollector.Models;

import javax.persistence.*;


@Entity
@Table(name="compras")
public class ComprasModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name="idCompras")
    private Long idCompras;
    @Column(name = "monto")
    private String monto;
    @Column(name = "fecha")
    private String fecha;
    @Column (name="Usuarios_idUsuarios")
    private Long Usuarios_idUsuarios;
    
    //Empty constructor
    public ComprasModel() {
    	super();
	}//empty Constructor

	public String getMonto() {
		return monto;
	}

	public void setMonto(String monto) {
		this.monto = monto;
	}

	public Long getUsuarios_IdUsuarios() {
		return Usuarios_idUsuarios;
	}

	public void setUsuarios_IdUsuarios(Long Usuarios_idUsuarios) {
		this.Usuarios_idUsuarios = Usuarios_idUsuarios;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public Long getIdCompras() {
		return idCompras;
	}

	public void setIdCompras(Long idCompras) {
		this.idCompras = idCompras;
	}

    //Getter & Setters
    
	

}//model class
