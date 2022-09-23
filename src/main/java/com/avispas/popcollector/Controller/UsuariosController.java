package com.avispas.popcollector.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.avispas.popcollector.Models.UsuariosModel;
import com.avispas.popcollector.Services.UsuariosService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UsuariosController {

    @Autowired
    UsuariosService usuariosServicios;
    
// GET todos los usuarios
    @GetMapping(value = "/getUsers")
    public ArrayList<UsuariosModel> getAllUsers() {
        return this.usuariosServicios.getAllUsers();
    }

//POST usuarios
    @PostMapping
    public void addUser(@RequestBody UsuariosModel user) {
    	usuariosServicios.addUser(user);
    }

//GET usuario por ID
    @GetMapping(path = "{idUsuarios}")
    public UsuariosModel getUserById(@PathVariable("idUsuarios") Long idUsuarios) {
        return this.usuariosServicios.getUserById(idUsuarios);
    }

//PUT (modificar) por ID 
    @PutMapping (path="{idUsuarios}")
	public void updateUser(
		@PathVariable("idUsuarios")Long idUsuarios,
		@RequestParam (required = false) String nombre,
		@RequestParam (required = false) String apellido,
		@RequestParam (required = false) String correo,
		@RequestParam (required = false) String contra) {
    	usuariosServicios.updateUser (idUsuarios, nombre, apellido, correo, contra);
	}//updateProducto

}
