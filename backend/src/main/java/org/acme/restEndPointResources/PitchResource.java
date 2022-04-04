package org.acme.restEndPointResources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.acme.entidades.Pitch;
import org.acme.entidades.Startup;

import io.quarkus.panache.common.Parameters;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.transaction.Transactional;

@Path("/pitchs")
public class PitchResource {

  // @GET
  // @Produces(MediaType.APPLICATION_JSON)
  // public List<Pitch> list() {
  // return Pitch.listAll();
  // }
  @Inject
  EntityManager em;

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/search")
  public ArrayList<Pitch> pitchsByLocalNumeroDeFuncionariosAndInvestimento(@QueryParam("serieInvestimento") String inv, @QueryParam("local") String local,@QueryParam("qtdFuncionarios") int  quantidadeDeFuncionarios) {
    // return em.createQuery("select * from pitch").getResultList();
    ArrayList<Pitch> pitchs = new ArrayList<Pitch>();
    List<Pitch> pitchsSerieInvestimentos=Pitch.find("seriedeinvetimento like ?1 ",inv).list();
   // return Startup.find("quantidadedefuncionarios <= ?1 ",inv).list();
    List<Startup> startups=Startup.find("local like ?1 and quantidadedefuncionarios <= ?2 ", local,quantidadeDeFuncionarios).list();
    
    for (Startup startup : startups) {
      for(Pitch p:pitchsSerieInvestimentos){
        if(startup==p.startup){
          pitchs.add(p);
        }
      }
    }

    return pitchs;
  }

  // pitch.startup.quantidadeDeFuncionarios,
  // "%"+pitch.startup.endereco.cidade+"%",
  // "%"+pitch.startup.endereco.estado+"%",
  // "%"+pitch.startup.endereco.pais+"%"
  @Transactional
  @Produces(MediaType.APPLICATION_JSON)
  @POST
  public Pitch add(Pitch pitch) {
    pitch.persist();
    return pitch;
  }
  @Produces(MediaType.APPLICATION_JSON)
  @PUT
  @Path("/{id}")
  @Transactional
  public Pitch update(@PathParam("id") Long id, Pitch pitch) {
    Pitch entity = Pitch.findById(id);
    if (entity == null) {
      throw new NotFoundException();
    }

    // map all fields from the person parameter to the existing entity
    entity.diretorioDoArquivo = pitch.diretorioDoArquivo;
    entity.serieDeInvetimento = pitch.serieDeInvetimento;
    entity.startup=pitch.startup;
    return entity;
  }

}
