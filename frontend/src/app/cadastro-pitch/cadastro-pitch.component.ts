import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Pitch } from '../model/pitch';
import { PitchCadastro } from '../model/pitchCadastro';
import { User } from '../model/user';
import { PitchService } from '../service/pitchService';
import { UserService } from '../service/userService';

@Component({
  selector: 'app-cadastro-pitch',
  templateUrl: './cadastro-pitch.component.html',
  styleUrls: ['./cadastro-pitch.component.css']
})
export class CadastroPitchComponent implements OnInit {
  public hideElement: boolean = true;
  public series: string[] = [
    "", "Série A", "Série B", "Série C", "Série D", "Série E"
  ]
  public pitchs: Pitch[] = [];
  public pitchAtivo: Pitch = {
    id: 0, diretorioDoArquivo: "", serieDeInvetimento: "", startup: {
      id: 0, name: "", quantidadeDeFuncionarios: 0, local: "", descricao: ""
    }
  };
  public pitchCadastro: PitchCadastro = {
    diretorioDoArquivo: "", serieDeInvetimento: "", startup: {
      id: 0, name: "", quantidadeDeFuncionarios:0, local: "", descricao: ""
    }
  };
  id:number=0;
  user={}as User;// = {"id":0, "email": "", "password": "", "investidor": { "id": 0, "name": "", "local": "" }, "startup": {
//     "id": 0, "local": "", "name": "", "descricao": "", "quantidadeDeFuncionarios": 0
//   }
// };
  constructor(private pitchService:PitchService,private userService:UserService,private route:ActivatedRoute) { 
    this.id = JSON.parse(route.snapshot.params['user']);
  }

  ngOnInit(): void {
   this.userService.getById(this.id).subscribe(
    (data: User) => this.user=data, error => console.log("error en create pitchs", error)
   );
  
   console.log(this.user)
   this.userService.getById(this.id).subscribe(
    (data: User) => this.user=data, error => console.log("error en create pitchs", error)
   );
   console.log(this.user)
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

  cadastrarPitch(){
    this.pitchAtivo.startup=this.user.startup;
    this.pitchService.createPitch(this.pitchCadastro).subscribe(
      (data: Pitch) => this.pitchs.push(data), error => console.log("error en create pitchs", error)
    );
    console.log(this.pitchs[(this.pitchs.length-1)]);
    
  }

  // updatePitch(){
  //   this.pitchService.updatePitch(this.pitchAtivo.id,this.pitchAtivo).subscribe(
  //     (data: Pitch) => this.pitchs.push(data), error => console.log("error en update pitchs", error)
  //   );
  // }
}
