package com.avispas.popcollector.Controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.avispas.popcollector.Models.DomicilioModel;
import com.avispas.popcollector.Services.DomicilioService;

@RestController
@RequestMapping(path="/domicilio")
@CrossOrigin("*")
public class DomicilioController{
	
	@Autowired
	 DomicilioService domicilioService;

	//Constructor del Autowired
	
//	public DomicilioController(DomicilioService domicilioService) {
//		super();
//		this.domicilioService = domicilioService;
//	}
	
	@GetMapping(value = "/getAll")
    public List<DomicilioModel> getAllDomicilio() {
        return this.domicilioService.getAllDomicilio();
    }

    @PostMapping
    public DomicilioModel postDomicilio(@RequestBody DomicilioModel domicilio) {
        return this.domicilioService.postDomicilio(domicilio);
    }

    @GetMapping(path = "/{id}")
    public Optional<DomicilioModel> getIdDomicilio(@PathVariable("id") Long id) {
        return this.domicilioService.getIdDomicilio(id);
    }
    
    @GetMapping(path = "/user/{idUsuario}")
    public Optional<DomicilioModel> getDomicilioByIdUsuario(@PathVariable("idUsuario") Long Usuarios_idUsuarios) {
        return this.domicilioService.getDomicilioByIdUsuario(Usuarios_idUsuarios);
    }
    
    @PutMapping(path = "/user/{idUsuario}")
    public String putDomicilio(@PathVariable("idUsuario") Long id, @RequestBody DomicilioModel domicilio) {
        return this.domicilioService.putDomicilio(id, domicilio);
    }
    
    
	
}//DomiciioController