import { Investidor } from './investidor';
import { Startup } from './startup';

export interface User{
  id:number;
  email:string;
  password:string;
  startup:Startup;
  investidor:Investidor;
}
