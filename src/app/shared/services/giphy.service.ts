import { Injectable } from '@angular/core';
import { Gifresponsive, Gif } from '../interfaces/giphy.interface';
import{HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {



  private _gifs: Gif[] = [];
  private _historial: string[] = JSON.parse(localStorage.getItem("historial")!) || [];

  constructor(private http: HttpClient) { }

  get gifs(){
    return this._gifs;
  }
  get historial(){
    return this._historial;
  }

  findGifs(filter: string){
    if(!this.historial.includes(filter)){
      this._historial.unshift(filter);
      this._historial.splice(10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

  this.http.get<Gifresponsive>(`https://api.giphy.com/v1/gifs/search?q=${filter}&api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&limit=15`)
  .subscribe((response:Gifresponsive)=> {
    this._gifs = response.data;
  });
  }




}
