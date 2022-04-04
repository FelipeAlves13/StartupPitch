import { Investidor } from './investidor';
import { Startup } from './startup';

export interface UserCadastro{
  email:string;
  password:string;
  startup:Startup;
  investidor:Investidor;
}
