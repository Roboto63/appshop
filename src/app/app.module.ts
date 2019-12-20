import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPopper } from 'angular-popper';

import { AppComponent } from './app.component';
import { Carousel } from './components/carousel/carousel.componet';
import { CardNuevo } from './components/card-nuevo/card-nuevo.componet';
import { FooterCustom } from './components/footer/footer.componet';
import { JumboPromo } from './components/jumbopromo/jumbopromo.componet';

@NgModule({
  declarations: [
    AppComponent,
    Carousel,
    CardNuevo,
    FooterCustom,
    JumboPromo
  ],
  imports: [
    BrowserModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
