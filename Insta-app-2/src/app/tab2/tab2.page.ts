import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

import { FirebaseDbService } from '../firebase-db.service';
import { SubirFotoService } from '../subir-foto.service';

import { FotoSerivceService } from '../foto-serivce.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private db: FirebaseDbService, 
    private subirFotoService: SubirFotoService,
    public photoService: FotoSerivceService) {}

  descripcionFoto: String;
  usuario: String ;

  urlFoto: String;// = '../assets/images/feed/feed1.png';
  datosPublicacion: any = {
    usuario: String,
    descripcionFoto: String,
    urlFoto: String
  }
  
  
  crearPublicacion(params: {usuario: String; descripcionFoto: String; urlFoto: String}) {
    this.db.postPublicacion(params).subscribe(res => {
      console.log(res);
    })
   }
 
   onChange(event) {
     console.log(event);
 
     
     this.urlFoto = event.target.files[0];
     this.subirFotoService.subirFoto('urlFotoTest', this.urlFoto);
 
  }

  agregarFotoAGaleria(){
    this.photoService.agregarFoto();
  }

  ngOnInit() {
    this.descripcionFoto = '';
    this.usuario = '';
    this.urlFoto = '';

    this.datosPublicacion = {
      usuario: this.usuario, 
      descripcionFoto: this.descripcionFoto,
      urlFoto: this.urlFoto
    }

    console.log(this.datosPublicacion);

  }



}
