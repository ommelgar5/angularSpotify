import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

/*

@Injectable()
Si dejamos asi el decorador, que permite que el codigo sea injectado donde sea, componentes, services

Tendriamos que agregar en el app.module.ts para que se pueda usar en la aplicacion

import { SpotifyService } from './services/spotify.service';

@NgModule({
  imports: [
    SpotifyService
  ],
}];

PERO con el decorador configurado con:

{
  providedIn: 'root'
}

El compilador se encarga importarlo, injeccion automatica

*/

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }


  getToken() {

    const CLIENT_ID = 'ecfd35bb549745249bb436f08cfdae18';
    const CLIENT_SECRET = '62e552e5a99045d386be4a584427a77e';

    return this.http.get(`http://ommelgardev.ddns.net/dev/getTokenSpotify/public/${ CLIENT_ID }/${ CLIENT_SECRET}`)
            .pipe( map((access_token) => access_token['access_token']));

  }


  getQuery(query: string, token: string){

    const url = `https://api.spotify.com/v1/${ query }`;

      const cabeceras = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get(url , { headers: cabeceras });
  }

  getNewReleases(token: string) {

      return this.getQuery('browse/new-releases?limit=20', token)
                  .pipe( map((responseHttp) => responseHttp['albums'].items) );
    // Retorna un Observable

    /* this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: cabeceras })
                    .pipe( map((responseHttp) => responseHttp['albums'].items) ); */
  }

  getArtistas(termino: string, token: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`, token)
                .pipe( map((responseHttp) => responseHttp['artists'].items ));

    /* return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers: cabeceras })
                    .pipe( map((responseHttp) => responseHttp['artists'].items )); */
  }

  getArtista(id: string, token: string) {
      return this.getQuery(`artists/${ id }`, token);
  }

  getTopTracks(id: string, token: string) {
    return this.getQuery(`artists/${ id }/top-tracks?market=US`, token)
                .pipe( map(( topTracks) => topTracks['tracks']));
  }


}
