package com.avispas.popcollector.Services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avispas.popcollector.Models.ComprasModel;

import com.avispas.popcollector.Repository.ComprasRepository;

@Service
public class ComprasService {
	
	@Autowired
	ComprasRepository comprasRepo;

	public ArrayList<ComprasModel> getAllCompras() {
		// TODO Auto-generated method stub
		return (ArrayList<ComprasModel>) comprasRepo.findAll();
	}

	public ComprasModel postCompras(ComprasModel compras) {
		// TODO Auto-generated method stub
		String timeStamp = new SimpleDateFormat("yyyy/MM/dd").format(Calendar.getInstance().getTime());
		compras.setFecha(timeStamp);
		

		return comprasRepo.save(compras);
	}

	public Optional<ComprasModel> getIdCompras(Long idCompras) {
		// TODO Auto-generated method stub
		return comprasRepo.findById(idCompras);
	}

	public ArrayList<ComprasModel> getIdUsuario(Long idUsuario) {
		// TODO Auto-generated method stub
		return (ArrayList<ComprasModel>) comprasRepo.findByUsuarios_idUsuarios(idUsuario);
	}

	


}
