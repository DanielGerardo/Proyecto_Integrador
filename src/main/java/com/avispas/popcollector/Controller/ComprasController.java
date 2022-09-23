package com.avispas.popcollector.Controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avispas.popcollector.Models.ComprasModel;

import com.avispas.popcollector.Services.ComprasService;


@RestController
@RequestMapping("/compras")
@CrossOrigin("*")
public class ComprasController {
	
	@Autowired
	ComprasService comprasServices;
	
	 @GetMapping(value = "/getAll")
	    public ArrayList<ComprasModel> getAllCompras() {
	        return this.comprasServices.getAllCompras();
	    }

	    @PostMapping
	    public ComprasModel postCompras(@RequestBody ComprasModel compras) {
	        return this.comprasServices.postCompras(compras);
	    }

	    @GetMapping(path = "/{idCompras}")
	    public Optional<ComprasModel> getIdCompras(@PathVariable("idCompras") Long idCompras) {
	        return this.comprasServices.getIdCompras(idCompras);
	    }
	
	    @GetMapping(path = "user/{idUsuario}")
	    public ArrayList<ComprasModel> getIdUsuario(@PathVariable("idUsuario") Long idUsuario) {
	        return this.comprasServices.getIdUsuario(idUsuario);
	    }
	

	
	

}
