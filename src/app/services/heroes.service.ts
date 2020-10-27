import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  API_KEY = "313d58b17467c1c9bdf8babce1f514f0";

  HASH = "0043b33a0bf137f55ca9117137e18d07"

  apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }
  
  public getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(map((data: any) => data.data.results));
  }

}
