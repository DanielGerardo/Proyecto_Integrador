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

import com.avispas.popcollector.Models.DetalleCompraModel;
import com.avispas.popcollector.Services.DetalleComprasService;

@RestController
@RequestMapping("/detallecompras")
@CrossOrigin("*")

public class DetalleCompraController {

	@Autowired
	DetalleComprasService detalleServices;

	@GetMapping(value = "/getAll")
	public ArrayList<DetalleCompraModel> getAllDCompra() {
		return this.detalleServices.getAllProductos();
	}

	@PostMapping
	public DetalleCompraModel postDCompra(@RequestBody DetalleCompraModel dCompra) {
		return this.detalleServices.postDCompra(dCompra);
	}

	@GetMapping(path = "/{idCompra}")
	public ArrayList<DetalleCompraModel> getIdCompra(@PathVariable("idCompra") Long idCompra) {
		return this.detalleServices.getIdCompra(idCompra);
	}

}
