import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';
//import * as data from '../../assets/feed.json';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  ///_filtrarPublicacion: number; //filtro de publicaciones en el perfil
 /// publicacion: any;
 /// usuario: any;
 publicacionId: any;
 /// datos: any = data;
 /// publicaciones: any = this.datos.publicaciones;
 /// detallePublicacion: any;

 volver(): void {
   this._location.back();
 }
 constructor(private RutaActiva: ActivatedRoute, private _location : Location){}


  /*get filtrarPublicacion(): number {
    return this._filtrarPublicacion;
  }
  set filtrarPublicacion(valor: number) {
    console.log(valor);
    this._filtrarPublicacion = valor;
    this.detallePublicacion = this.cargarDetallePublicacion(valor); 
  }

  cargarDetallePublicacion(idPublicacion: number):any {
     return this.publicaciones.find((publicacion: any) => publicacion.id );
  }
  volver(): void {
    this._location.back();
  }

  constructor(private RutaActiva: ActivatedRoute, private _location : Location) { }
*/
  ngOnInit() {
    this.RutaActiva.queryParams.subscribe(params => {
      console.log(params);
      this.publicacionId = params.publicacionId;
      console.log(this.publicacionId);
    }
    )

  }



}
