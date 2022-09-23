package com.avispas.popcollector.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.avispas.popcollector.Models.DomicilioModel;

@Repository
public interface DomicilioRespository extends JpaRepository<DomicilioModel, Long>{
	
	@Query("SELECT d FROM DomicilioModel d WHERE d.usuarios_idUsuarios=?1")
	public Optional<DomicilioModel> findByUsuarios_idUsuarios(Long idUsuarios);
	
//	@Query("SELECT d FROM DomicilioModel d WHERE d.usuarios_idUsuarios=?1")
//	public Boolean existsByUsuarios_idUsuarios(Long idUsuarios);




}//DomicilioRepository
