import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Injectable, NgModule } from '@angular/core';

@Injectable()
@NgModule()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) =>
    response.json());
  }

}
