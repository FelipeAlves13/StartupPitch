package org.acme.restEndPointResources;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.entidades.Startup;
import javax.transaction.Transactional;

@Path("/startups")
public class StartupResource {

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<Startup> list() {
    return Startup.listAll();
  }

  @Transactional
  @POST
  public Startup add(Startup startup) {
    startup.persist();
    return startup;
  }

  @PUT
  @Path("/{id}")
  @Transactional
  public Startup update(@PathParam("id") Long id, Startup startup) {
    Startup entity = Startup.findById(id);
    if (entity == null) {
      throw new NotFoundException();
    }

    // map all fields from the person parameter to the existing entity
    entity.name = startup.name;
    entity.quantidadeDeFuncionarios=startup.quantidadeDeFuncionarios;
    entity.local = startup.local;
    entity.descricao=startup.descricao;

    return entity;
  }
}
