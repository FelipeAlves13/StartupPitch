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
import javax.ws.rs.core.MediaType;

import org.acme.entidades.Pitch;
import org.acme.entidades.Startup;

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
  @Consumes(MediaType.APPLICATION_JSON)
  public ArrayList<Pitch> pitchsByLocalNumeroDeFuncionariosAndInvestimento(Pitch pitch) {
    // return em.createQuery("select * from pitch").getResultList();
    ArrayList<Pitch> pitchs = new ArrayList<Pitch>();

    List<Pitch> pitchsSerieInvestimentos = Pitch.find("seriedeinvetimento like ?1", pitch.serieDeInvetimento).list();
    
    List<Startup> startups=Startup.find("local like ?1 and quantidadedefuncionarios <= ?2 ", pitch.startup.local,pitch.startup.quantidadeDeFuncionarios).list();
    
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
  @POST
  public Pitch add(Pitch pitch) {
    pitch.persist();
    return pitch;
  }

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

    return entity;
  }

}
