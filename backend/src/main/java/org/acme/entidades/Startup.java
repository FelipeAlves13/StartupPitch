package org.acme.entidades;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Startup extends PanacheEntity {

  public String name;
  public int quantidadeDeFuncionarios;
  public String local;

}
