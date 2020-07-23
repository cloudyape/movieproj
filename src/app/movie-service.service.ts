import { Injectable } from '@angular/core';
import { HttpClientModule  , HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  findAllMovies(): Observable<any> {
    const someURL = "https://ghibliapi.herokuapp.com/films";
    return this.http
        .get(someURL)
        .pipe(map(result=> {return result}))
  }

}
