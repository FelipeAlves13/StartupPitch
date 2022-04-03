import { Investidor } from './investidor';
import { Startup } from './startup';

export interface User{
  email:string;
  password:string;
  startup:Startup;
  investidor:Investidor;
}
