import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
