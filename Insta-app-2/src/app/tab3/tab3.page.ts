import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario: String = "Ruffles"; followers: number = 11000; following: number = 520; descripcion: String = "Hola, soy Ruffles. El perro favorito de NL ♠";
  nombre: "Ruffles";
  constructor(private http: HttpClient) {}

  obtenerPerfil(): void{
    this.http.get();
  }

  ngOnInit() {
    
  }

}
