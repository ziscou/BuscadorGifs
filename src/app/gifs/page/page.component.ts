import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from '../../shared/services/giphy.service';
import { Gif } from '../../shared/interfaces/giphy.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit,OnDestroy{
  gifs:Gif[]=[];
  subscription: Subscription = new Subscription;

  constructor(private service:GiphyService){};

  ngOnInit(): void {
    this.subscription = this.service.getGifs().subscribe((response: Gif[]) => {
      console.log(response);
      this.gifs = response;

    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




}
