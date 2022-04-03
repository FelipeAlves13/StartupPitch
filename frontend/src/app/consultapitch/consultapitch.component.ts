import { Component, OnInit } from '@angular/core';
import { Pitch } from '../model/pitch';

@Component({
  selector: 'app-consultapitch',
  templateUrl: './consultapitch.component.html',
  styleUrls: ['./consultapitch.component.css']
})
export class ConsultapitchComponent implements OnInit {
  public hideElement: boolean=true;
  public localidade:string="";
  public serieInvestimento:string="Série A";
  public series:string[]=[
    "Série A","Série B","Série C","Série D","Série E"
  ]
  public pitchs: Pitch[] = [
    {id:1,diretorioDoArquivo:"opaaaa",serieDeInvestimento:"Serie A",startup:{
    id:1,name:"Felipe",numeroDeFuncionarios:20,local:"opaa"}
    },
    {id:1,diretorioDoArquivo:"opaaaa",serieDeInvestimento:"Serie B",startup:{
      id:1,name:"Felipe Antonio",numeroDeFuncionarios:50,local:"opaa"}
      }
  ];
  public pitchAtivo:Pitch={id:0,diretorioDoArquivo:"",serieDeInvestimento:"",startup:{
    id:0,name:"",numeroDeFuncionarios:0,local:""}
    };
    public pitchBusca:Pitch={id:0,diretorioDoArquivo:"",serieDeInvestimento:"",startup:{
      id:0,name:"",numeroDeFuncionarios:0,local:""}
      };

  constructor() { }

  ngOnInit(): void {
  }

  exibirOuOcultar(indice:number): void{
    if(this.hideElement){
      this.hideElement = false;
      if(indice>=0){
        this.pitchAtivo=this.pitchs[indice];
      }
    }else{
      this.hideElement = true;
    }

  }

  buscarPitchsPorLocalNumeroDeFuncionariosSerieDeInvestimentos(){
    this.pitchBusca.startup.local="%"+this.localidade+"%";
  }
}
