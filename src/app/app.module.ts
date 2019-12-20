import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPopper } from 'angular-popper';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Carousel } from './components/carousel/carousel.componet';
import { CardNuevo } from './components/card-nuevo/card-nuevo.componet'
import { FooterCustom } from './components/footer/footer.componet'
import { JumboPromo } from './components/jumbopromo/jumbopromo.componet';
import { InfoComponent } from './components/info/info.component'

const rutas: Routes =[
  {
    path: 'info',
    component: InfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Carousel,
    CardNuevo,
    FooterCustom,
    JumboPromo,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    NgxPopper,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
