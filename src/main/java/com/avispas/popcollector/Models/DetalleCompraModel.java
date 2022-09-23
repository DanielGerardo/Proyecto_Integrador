package com.avispas.popcollector.Models;

import javax.persistence.*;

@Entity
@Table(name = "products_has_compras")
public class DetalleCompraModel {

	@Id
	@Column(name = "Products_idProducts")
	private Long Products_idProducts;
	@Column(name = "Compras_idCompras")
	private Long Compras_idCompras;
	@Column(name = "Cantidad")
	private Long Cantidad;

	public DetalleCompraModel() {
		super();// TODO Auto-generated constructor stub
	}

	public Long getProducts_idProducts() {
		return Products_idProducts;
	}

	public void setProducts_idProducts(Long products_idProducts) {
		Products_idProducts = products_idProducts;
	}

	public Long getCompras_idCompras() {
		return Compras_idCompras;
	}

	public void setCompras_idCompras(Long compras_idCompras) {
		Compras_idCompras = compras_idCompras;
	}

	public Long getCantidad() {
		return Cantidad;
	}

	public void setCantidad(Long cantidad) {
		Cantidad = cantidad;
	}
}
