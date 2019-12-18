import { Component } from '@angular/core';

@Component({
    selector: 'card-nuevo',
    templateUrl: 'card.component.html',
})

export class CardNuevo{

    constructor(){
        console.log("cards cargados!");
    }
}