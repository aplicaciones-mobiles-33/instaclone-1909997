import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private http: HttpClient) { }

  resArray = [];

  getPublicaciones(){
    return this.http.get('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(res => {
        for(const key in res) {
        this.resArray.push( {...res[key], key});
      }return this.resArray;
  })
  )
}

  getPublicacion(idPost){
    return this.http.get('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/publicaciones/'+idPost+'.json');
  }  

  postPublicacion(infoPost){
    return this.http.post('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/publicaciones.json',infoPost);
  }

  deletePost(idPost){
    return this.http.delete('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/publicaciones/'+idPost+'.json');
  }

  updatePost(idPost,infoPost){
    return this.http.put('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/publicaciones'+idPost+'.json',infoPost);
  }

  //Perfil
  getPerfilUsuario(){
    return this.http.get('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/usuario.json');
  }

  updateBioUsuario(nuevaBio){
    return this.http.put('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/usuario/bio.json',nuevaBio);
  }

  updateNombreUsuario(Nuevonombre){
    return this.http.get('https://instaclone-app-fc3ab-default-rtdb.firebaseio.com/usuario/nombre.json',Nuevonombre);
  }



}