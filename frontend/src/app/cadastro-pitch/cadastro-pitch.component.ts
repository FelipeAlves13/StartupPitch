import { Component, OnInit } from '@angular/core';
import { Pitch } from '../model/pitch';

@Component({
  selector: 'app-cadastro-pitch',
  templateUrl: './cadastro-pitch.component.html',
  styleUrls: ['./cadastro-pitch.component.css']
})
export class CadastroPitchComponent implements OnInit {
  public series: string[] = [
    "", "Série A", "Série B", "Série C", "Série D", "Série E"
  ]
  public pitchs: Pitch[] = [
    {
      id: 1, diretorioDoArquivo: "opaaaa", serieDeInvetimento: "Serie A", startup: {
        id: 1, name: "Felipe", quantidadeDeFuncionarios: 20, local: "opaa", descricao: ""
      }
    },
    {
      id: 1, diretorioDoArquivo: "opaaaa", serieDeInvetimento: "Serie B", startup: {
        id: 1, name: "Felipe Antonio", quantidadeDeFuncionarios: 50, local: "opaa", descricao: ""
      }
    }
  ];
  public pitchAtivo: Pitch = {
    id: 0, diretorioDoArquivo: "", serieDeInvetimento: "", startup: {
      id: 0, name: "", quantidadeDeFuncionarios: 0, local: "", descricao: ""
    }
  };
  public pitchBusca: Pitch = {
    id: 0, diretorioDoArquivo: "", serieDeInvetimento: "", startup: {
      id: 0, name: "", quantidadeDeFuncionarios: 50, local: "", descricao: ""
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
