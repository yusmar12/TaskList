import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  listas: Lista[] = []; //si no le pongo private, queda como public


  constructor() { 
    
    const lista1 = new Lista('Recolectar basura');
    const lista2 = new Lista('Lavar cubrebocas');
    
    this.listas.push(lista1, lista2);
  }


}
