package com.avispas.popcollector.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avispas.popcollector.Models.UsuariosModel;

public interface UsuariosRepository extends JpaRepository <UsuariosModel, Long> {

}
