import { Component } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private servicio: GiphyService){}

  get historial(){
    return this.servicio.historial;
  }
  get servicio1(){
    return this.servicio;
  }

}
