import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any[]): string {
    let url: string = "assets/img/noimage.png";

    if(!imagenes){
       url = 'assets/img/noimage.png';
    }

    if(imagenes.length > 0 ){
        url = imagenes[0].url ?? 'assets/img/noimage.png';
    }

    return url;
  }

}
