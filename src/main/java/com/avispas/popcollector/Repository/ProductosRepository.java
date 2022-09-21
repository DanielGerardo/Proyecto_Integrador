package com.avispas.popcollector.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avispas.popcollector.Models.ProductosModel;

@Repository
public interface ProductosRepository extends JpaRepository<ProductosModel, Long> {
    public Optional<ProductosModel> findByCodigo(Long codigo);
}
