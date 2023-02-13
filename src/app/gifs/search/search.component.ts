import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gifresponsive } from 'src/app/shared/interfaces/giphy.interface';
import { GiphyService } from 'src/app/shared/services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  @ViewChild('filter') filter!:ElementRef ;

  constructor(private giphyservice:GiphyService){}

  ngOnInit(): void {
  }

  search(filter: string){
    if (filter !== '') {
    this.giphyservice.findGifs(filter);
    this.filter.nativeElement.value = '';
    }

  }

}
