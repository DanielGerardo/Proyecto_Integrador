package com.avispas.popcollector.Services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.avispas.popcollector.Models.DomicilioModel;
import com.avispas.popcollector.Repository.DomicilioRespository;

@Service
public class DomicilioService {
	@Autowired
	DomicilioRespository domicilioRepo;
	
	//GETTodosDomicilios
	public List<DomicilioModel> getAllDomicilio() {
		return(List<DomicilioModel>) domicilioRepo.findAll();
	}
	
	//POSTdelDomicilio
	public DomicilioModel postDomicilio(DomicilioModel domicilio) {
		return domicilioRepo.save(domicilio);
	}
	
	//GetDomicilio por ID practica de POSTMAN
	public Optional<DomicilioModel> getIdDomicilio(Long id) {
		return domicilioRepo.findById(id);
	}
	
	//PUT DOMICILIO
	public String putDomicilio(Long id, DomicilioModel domicilio) {
		Optional<DomicilioModel> idUsuarioTemp = domicilioRepo.findByUsuarios_idUsuarios(id);
		DomicilioModel idUsuario = idUsuarioTemp.get();
		if (idUsuario.getUsuarios_idUsuarios() == id) {
            if (domicilio.getCalle() == null || domicilio.getCalle().isEmpty()) {
                return "El campo calle esta vacío";
            } else if (domicilio.getNumExt() == null) {
                return "El campo número esta vacío";
            } else if (domicilio.getColonia() == null || domicilio.getColonia().isEmpty()) {
                return "El campo descripción esta vacío";
            } else if (domicilio.getMunicipio() == null || domicilio.getMunicipio().isEmpty()) {
                return "El campo municipio esta vacío";
            } else if (domicilio.getEstado() == null || domicilio.getEstado().isEmpty()) {
                return "El campo estado esta vacío";
            } else if (domicilio.getTelefono() == null) {
                return "El campo telefono esta vacío";
            } else {
            	domicilio.setUsuarios_idUsuarios(id);
            	domicilioRepo.save(domicilio);
                return "Cambios guardados";
            }
        } else {
            return "El Id:" + id + " No existe";
        }
	}//Put Domicilio

	
	public Optional<DomicilioModel> getDomicilioByIdUsuario(Long usuarios_idUsuarios) {
		return domicilioRepo.findByUsuarios_idUsuarios(usuarios_idUsuarios);
	}

}
