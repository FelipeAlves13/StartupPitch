import { Inject } from '@angular/core';
import { Startup } from './startup';

export interface Pitch {
  id: number;
  diretorioDoArquivo: string;
  serieDeInvetimento: string;
  startup: Startup;

}
