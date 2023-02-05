import { Injectable } from '@angular/core';
import { Gifresponsive } from '../interfaces/giphy.interface';
import{HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  findGifs(filter: string){
  this.http.get<Gifresponsive>(`https://api.giphy.com/v1/gifs/search?q=${filter}&api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&limit=15`)
  .subscribe((response:Gifresponsive)=> {
    this.gifs.next(response.data);
  });
  }
  getGifs(){
    return this.gifs.asObservable();
  }

}
