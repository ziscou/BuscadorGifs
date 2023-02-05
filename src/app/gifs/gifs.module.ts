import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    PageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    PageComponent,
    SearchComponent
  ]
})
export class GifsModule { }
