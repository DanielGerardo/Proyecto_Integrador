package com.avispas.popcollector.Models;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class ProductosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProducts")
    private Long idProducts;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "img")
    private String img;
    @Column(name = "img2")
    private String img2;
    @Column(name = "img3")
    private String img3;
    @Column(name = "codigo")
    private Long codigo;
    @Column(name = "precio")
    private Double precio;
    @Column(name = "cantidad")
    private Long cantidad;
    @Column(name = "certificado")
    private Boolean certificado;
    @Column(name = "exclusivo")
    private Boolean exclusivo;
    @Column(name = "fechaRegistro")
    private String fechaRegistro;
    @Column(name = "Categorias_idCategorias")
    private Long Categorias_idCategorias;

    public ProductosModel() {
        super();
    }

    public String getImg2() {
        return this.img2;
    }

    public void setImg2(String img2) {
        this.img2 = img2;
    }

    public String getImg3() {
        return this.img3;
    }

    public void setImg3(String img3) {
        this.img3 = img3;
    }

    public Boolean isExclusivo() {
        return this.exclusivo;
    }

    public Boolean getExclusivo() {
        return this.exclusivo;
    }

    public void setExclusivo(Boolean exclusivo) {
        this.exclusivo = exclusivo;
    }

    public Long getIdProducts() {
        return this.idProducts;
    }

    public void setIdProducts(Long idProducts) {
        this.idProducts = idProducts;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return this.img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Long getCodigo() {
        return this.codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public Double getPrecio() {
        return this.precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Long getCantidad() {
        return this.cantidad;
    }

    public void setCantidad(Long cantidad) {
        this.cantidad = cantidad;
    }

    public Boolean isCertificado() {
        return this.certificado;
    }

    public Boolean getCertificado() {
        return this.certificado;
    }

    public void setCertificado(Boolean certificado) {
        this.certificado = certificado;
    }

    public String getFechaRegistro() {
        return this.fechaRegistro;
    }

    public void setFechaRegistro(String fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Long getCategorias_idCategorias() {
        return this.Categorias_idCategorias;
    }

    public void setCategorias_idCategorias(Long Categorias_idCategorias) {
        this.Categorias_idCategorias = Categorias_idCategorias;
    }

}
