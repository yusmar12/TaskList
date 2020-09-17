import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;

  constructor(private deseosService:DeseosService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  editar(lista: Lista){
    if( this.terminada === true){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  
  borrarLista(lista: Lista){
    this.deseosService.borrarLista( lista );
    console.log("Se borró correctamente");
  }

  async confirmarEliminado(lista: Lista){
    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: `¿Está seguro que desea eliminar la lista < ${lista.titulo}? >`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log("Cancelado");
          }
        }, {
          text: 'Eliminar',
          cssClass: 'eliminar',
          handler: () => {
            this.borrarLista(lista);
          }
        }
      ]
    });

    alert.present();
  }
}
