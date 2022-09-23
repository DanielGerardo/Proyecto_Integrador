package com.avispas.popcollector.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avispas.popcollector.Models.CategoriasModel;

@Repository
public interface CategoriasRepository extends JpaRepository<CategoriasModel, Long>{

}
