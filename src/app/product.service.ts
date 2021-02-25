import { Http } from '@angular/http';
import { Injectable, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
@NgModule()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
      .pipe(map((res: Response) => res.json));
  }

}
