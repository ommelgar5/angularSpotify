import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ejemplo de peticion HTTP -> Modulo para hacer peticiones HTTP, si no se importa la clase  HttpClient no se podra usar
import { HttpClientModule } from '@angular/common/http';

// 1 FORMA:  Import requeridos para Routes
// import { RouterModule } from '@angular/router';


// Routes
// 1 FORMMA: Import de Routes
// import { ROUTES } from './app.routes';

// 2 FORMA:
import { AppRouting } from './app.routes';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/share/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistaComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot( ROUTES,  { useHash: true} ),
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
