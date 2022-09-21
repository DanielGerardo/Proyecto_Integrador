package com.avispas.popcollector.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avispas.popcollector.Models.ProductosModel;

@Repository
public interface ProductosRepository extends JpaRepository<ProductosModel, Long> {
    // public abstract Optional<ProductosModel> getCodigo(Long codigo);

}
