package org.acme.restEndPointResources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.entidades.Investidor;
import javax.transaction.Transactional;

@Path("/investidor")
public class InvestidorResource {

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<Investidor> list() {
    return Investidor.listAll();
  }

  @Transactional
  @POST
  public Investidor add(Investidor investidor) {
    investidor.persist();
    return investidor;
  }

  @PUT
  @Path("/{id}")
  @Transactional
  public Investidor update(@PathParam("id") Long id, Investidor investidor) {
    Investidor entity = Investidor.findById(id);
    if (entity == null) {
      throw new NotFoundException();
    }

    // map all fields from the person parameter to the existing entity
    entity.name = investidor.name;
    entity.local=investidor.local;
    return entity;
  }
}
