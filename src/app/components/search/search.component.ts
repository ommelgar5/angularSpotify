import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

   artistas: any[];
   loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }


  artista(termino:string){
    this.loading = true;
    console.log(termino);

    this.spotify.getToken()
                .subscribe((token) => {
                  this.spotify.getArtistas(termino, token)
                              .subscribe((responseHttp: any) => {
                                console.log(responseHttp);
                                this.artistas = responseHttp;
                                this.loading = false;
                              })

                });

  }

}
