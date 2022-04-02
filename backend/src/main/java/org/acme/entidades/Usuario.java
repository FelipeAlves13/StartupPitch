package org.acme.entidades;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;


import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Usuario extends PanacheEntity {
  
  
  public String email;


  public String password;

  @OneToOne(cascade = CascadeType.ALL)
  public Startup startup;

  @OneToOne(cascade = CascadeType.ALL)
  public Investidor investidor;
}
