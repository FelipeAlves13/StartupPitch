package org.acme.restEndPointResources;

import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.acme.entidades.Usuario;
import javax.transaction.Transactional;

@Path("/users")
public class UsuarioResource {

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<Usuario> list() {
    return Usuario.listAll();
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/login")
  public Usuario userByEmailAndPassword(@QueryParam("email") String email, @QueryParam("password") String password) {
    return Usuario.find("email = ?1 and password = ?2", email,password).firstResult();
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/user")
  public Usuario userById(@QueryParam("id") long id){
    return Usuario.findById(id);
  }


  @Transactional
  @Produces(MediaType.APPLICATION_JSON)
  @POST
  public Usuario add(Usuario usuario) {
    usuario.persist();
    return usuario;
  }

  
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/{id}")
  @Transactional
  @PUT
  public Usuario update(@PathParam("id") Long id, Usuario usuario) {
    Usuario entity = Usuario.findById(id);
    if (entity == null) {
      throw new NotFoundException();
    }

    // map all fields from the person parameter to the existing entity
    entity.email = usuario.email;
    entity.password = usuario.password;
    if (entity.startup != null) {
      entity.startup.name = usuario.startup.name;
      entity.startup.quantidadeDeFuncionarios = usuario.startup.quantidadeDeFuncionarios;
      entity.startup.local = usuario.startup.local;


    } else {
      entity.investidor.name = usuario.investidor.name;
      entity.investidor.local = usuario.investidor.local;
    }
    return entity;
  }

}
