import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any[] = [];

  loading: boolean;

  constructor(
              private route: ActivatedRoute,
              private spotify: SpotifyService
    ) {

    this.route.params.subscribe((parametros) => {
      console.log(parametros['id']);

      this.loading = true;


      this.spotify.getToken()
                .subscribe((token) => {
                  this.getTopTracks(parametros['id'],token);
                  this.getArtista(parametros['id'],token);
                });
    });
  }

  getArtista(id: string, token: string) {
    this.spotify.getArtista(id,token)
                .subscribe((artista) => {
                    this.artista = artista;
                    this.loading = false;
                    console.log(artista);
                });
  }

  getTopTracks(id: string, token: string) {
    this.spotify.getTopTracks(id,token)
                .subscribe((topTracks) => {
                  this.topTracks = topTracks;
                  console.log(topTracks);
                });
  }



}
