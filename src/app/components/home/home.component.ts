import { Component } from '@angular/core';

// Ejemplo peticion HTTP
// import { HttpClient } from '@angular/common/http';

import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  // paises: any[];

  // Ejemplo de peticion HTTP
  // private  http: HttpClient
  constructor( private spotify: SpotifyService) {

    // Ejemplo de peticion HTTP
    // console.log('Home preparado!!!');
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //           .subscribe((data: any[]) => {
    //             this.paises = data;
    //           });

    this.loading  = true;
    this.error = false;

    this.spotify.getToken()
                .subscribe((token) => {
                  this.spotify.getNewReleases(token)
                              .subscribe((responseHttp: any) => {
                                console.log(responseHttp);
                                this.nuevasCanciones = responseHttp;
                                this.loading = false;
                              },
                              (errorService) => {
                                console.log(errorService);
                                this.loading = false;
                                this.error = true;
                                this.errorMessage = errorService.error.error.message;
                              });

                });

   }
}


