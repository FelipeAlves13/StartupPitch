package org.acme.entidades;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Investidor extends PanacheEntity{
  
  public String name;
  public String local;
}
