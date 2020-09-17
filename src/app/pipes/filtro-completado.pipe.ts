import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada = true): Lista[] {
    return listas.filter( lista => {
      return lista.terminada === completada;
    });
    

    // return listas.filter( lista=> lista.terminada === completada);
  }

}
