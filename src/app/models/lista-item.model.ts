export class ListaItem{
    description: string;
    completado: boolean;

    constructor (description: string){
        this.description = description;
        this.completado = false;
    }
}