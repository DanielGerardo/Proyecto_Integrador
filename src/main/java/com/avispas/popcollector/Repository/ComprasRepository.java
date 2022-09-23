package com.avispas.popcollector.Repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avispas.popcollector.Models.ComprasModel;


@Repository
public interface ComprasRepository extends JpaRepository<ComprasModel, Long>{

 //public Optional<ComprasModel> findByUsuarios_idUsuarios (Long idUsurio);
	@Query("SELECT c FROM ComprasModel c WHERE c.Usuarios_idUsuarios=?1")
	public ArrayList<ComprasModel> findByUsuarios_idUsuarios(Long idUsuarios);
}
