import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String | undefined;
  password:String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  loginInSystem():void{
    console.log("Entrouuu! "+this.email+" "+this.password)
  }
}
