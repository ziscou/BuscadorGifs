import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../../shared/services/giphy.service';
import { Gif } from '../../shared/interfaces/giphy.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent{

  constructor(private service:GiphyService){};

get gifs(){
  return this.service.gifs;
}

}
