import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ConsultapitchComponent } from './consultapitch/consultapitch.component';
import { FormsModule } from '@angular/forms';
import { PitchService } from './service/pitchService';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ConsultapitchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'consulta', component: ConsultapitchComponent }
    ]),
  ],
  providers: [PitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
