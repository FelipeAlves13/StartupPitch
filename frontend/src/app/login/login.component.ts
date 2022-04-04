import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public user= {} as User;
  // {"id":0, "email": "", "password": "", "investidor": { "id": 0, "name": "", "local": "" }, "startup": {
  //     "id": 0, "local": "", "name": "", "descricao": "", "quantidadeDeFuncionarios": 0
  //   }
  // };
  constructor(private userService: UserService, private route:Router) { }

  ngOnInit(): void {
  }

  loginInSystem(): void {
    console.log(this.email+this.password);
    this.userService.getLogin(this.email, this.password).subscribe((data: User) => this.user=data, error => console.log("error en get login", error));
    console.log(this.user);
    if(this.user.id>0){
      this.route.navigate(['/startup',{user:JSON.stringify(this.user.id)}]);
    }
    
  }


}
