import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista[] = []; //si no le pongo private, queda como public


  constructor() { 
    // const lista1 = new Lista('Recolectar basura');
    // const lista2 = new Lista('Lavar cubrebocas');
    // this.listas.push(lista1, lista2);
    this.cargarStorage();
  }

  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    
    return nuevaLista.id;
  }

  borrarLista( lista: Lista ){
    this.listas = this.listas.filter( listaData =>listaData.id !== lista.id);

    this.guardarStorage();
  }

  obtenerLista( id:string | number ){
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id);
  }
  
  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas) );
  }

  cargarStorage(){
    if( localStorage.getItem('data') ){
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = [];
    }
  }
}
