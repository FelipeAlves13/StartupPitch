package org.acme.entidades;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Pitch extends PanacheEntity {

  public String diretorioDoArquivo;
  public String serieDeInvetimento;

  @ManyToOne
  public Startup startup;
}
