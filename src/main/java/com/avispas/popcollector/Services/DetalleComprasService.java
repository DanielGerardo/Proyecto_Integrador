package com.avispas.popcollector.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avispas.popcollector.Models.ComprasModel;
import com.avispas.popcollector.Models.ProductosModel;
import com.avispas.popcollector.Repository.DetalleCompraRepository;
import com.avispas.popcollector.Models.DetalleCompraModel;

@Service
public class DetalleComprasService {

	@Autowired
	DetalleCompraRepository detalleRepo;

	public ArrayList<DetalleCompraModel> getAllProductos() {
		// TODO Auto-generated method stub
		return (ArrayList<DetalleCompraModel>) detalleRepo.findAll();
	}

	public DetalleCompraModel postDCompra(DetalleCompraModel dCompra) {
		// TODO Auto-generated method stub
		return detalleRepo.save(dCompra);
	}

	public ArrayList<DetalleCompraModel> getIdCompra(Long idCompra) {
		// TODO Auto-generated method stub
		return (ArrayList<DetalleCompraModel>) detalleRepo.findByCompras_idCompras(idCompra);
	}

}
