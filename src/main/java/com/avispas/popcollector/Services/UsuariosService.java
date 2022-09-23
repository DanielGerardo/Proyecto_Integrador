package com.avispas.popcollector.Services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avispas.popcollector.Models.UsuariosModel;
import com.avispas.popcollector.Repository.UsuariosRepository;

@Service

public class UsuariosService {
	@Autowired
	private final UsuariosRepository usuariosRepository;
	
	public UsuariosService(UsuariosRepository usuariosRepository) {
		super();
		this.usuariosRepository = usuariosRepository;
	}


// GET todos los usuarios
	public ArrayList<UsuariosModel> getAllUsers() {
		return (ArrayList<UsuariosModel>) usuariosRepository.findAll();
	}

//POST usuarios
	public UsuariosModel addUser(UsuariosModel users) {
		
		String timeStamp = new SimpleDateFormat("yyyy/MM/dd").format(Calendar.getInstance().getTime());
		users.setFechaIngreso(timeStamp);
		
        return usuariosRepository.save(users);
        
	}
	
//GET usuario por ID
	public UsuariosModel getUserById(Long idUsuarios) {
		return usuariosRepository.findById(idUsuarios).
				orElseThrow(()-> new IllegalStateException("El usuario con el Id" + idUsuarios + "no existe."));
	}
	
//PUT (modificar) por ID 
	@SuppressWarnings("deprecation")
	public void updateUser(Long idUsuarios, String nombre, String apellido, String email, String contra) {
		if (usuariosRepository.existsById(idUsuarios)){ //Reviso que el producto exista
			UsuariosModel userTem = usuariosRepository.getById(idUsuarios);//si existe, lo guardo en la variable p
			if (nombre !=null) userTem.setNombre(nombre);
			if (apellido !=null) userTem.setApellido(apellido);
			if (email !=null) userTem.setEmail(email);
			if (contra !=null) userTem.setContra(contra);
			
			String timeStamp = new SimpleDateFormat("yyyy/MM/dd").format(Calendar.getInstance().getTime());
				userTem.setFechaIngreso(timeStamp);
		
			usuariosRepository.save(userTem);
		}else {
			System.out.println("No existe el id " + idUsuarios);
		}//if else
	}//updateProducto

}
