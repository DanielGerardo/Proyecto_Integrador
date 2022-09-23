package com.avispas.popcollector.Repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avispas.popcollector.Models.DetalleCompraModel;

@Repository
public interface DetalleCompraRepository extends JpaRepository<DetalleCompraModel, Long> {

	@Query("SELECT d FROM DetalleCompraModel d WHERE d.Compras_idCompras=?1")
	public ArrayList<DetalleCompraModel> findByCompras_idCompras(Long idCompra);

}
