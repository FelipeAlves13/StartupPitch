import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pitch } from '../model/pitch';
import { User } from '../model/user';
import { PitchService } from '../service/pitchService';

@Component({
  selector: 'app-consultapitch',
  templateUrl: './consultapitch.component.html',
  styleUrls: ['./consultapitch.component.css']
})
export class ConsultapitchComponent implements OnInit {
  public hideElement: boolean = true;
  public localidade: string = "";
  public serieInvestimento: string = "Série A";
  public series: string[] = [
    "", "Série A", "Série B", "Série C", "Série D", "Série E"
  ]
  public pitchs: Pitch[] = [
    // {
    //   id: 1, diretorioDoArquivo: "opaaaa", serieDeInvetimento: "Serie A", startup: {
    //     id: 1, name: "Felipe", quantidadeDeFuncionarios: 20, local: "opaa", descricao: ""
    //   }
    // },
    // {
    //   id: 1, diretorioDoArquivo: "opaaaa", serieDeInvetimento: "Serie B", startup: {
    //     id: 1, name: "Felipe Antonio", quantidadeDeFuncionarios: 50, local: "opaa", descricao: ""
    //   }
    // }
  ];
  public pitchAtivo: Pitch = {
    id: 0, diretorioDoArquivo: "", serieDeInvetimento: "", startup: {
      id: 0, name: "", quantidadeDeFuncionarios: 0, local: "", descricao: ""
    }
  };
  public pitchBusca: Pitch = {
    id: 0, diretorioDoArquivo: "", serieDeInvetimento: "", startup: {
      id: 0, name: "", quantidadeDeFuncionarios: 1, local: "", descricao: ""
    }
  };

  constructor(private pitchService: PitchService) {
    //this.user=route.queryParams.map(params=>params.get())
  }

  ngOnInit(): void {
    this.buscarPitchs();
  }

  exibirOuOcultar(indice: number): void {
    if (this.hideElement) {
      this.hideElement = false;
      if (indice >= 0) {
        this.pitchAtivo = this.pitchs[indice];
      }
    } else {
      this.hideElement = true;
    }

  }

  buscarPitchs() {
    this.pitchService.getTodosOsPitchs().subscribe((data: Pitch[]) => this.pitchs = data, error => console.log("error en get pitchs", error))
  }

  buscarPitchsPorLocalNumeroDeFuncionariosSerieDeInvestimentos() {
    this.pitchService.getPitchs(this.pitchBusca.startup.local, this.pitchBusca.serieDeInvetimento, this.pitchBusca.startup.quantidadeDeFuncionarios).subscribe((data: Pitch[]) => this.pitchs = data, error => console.log("error en get pitchs", error));
  }
}
