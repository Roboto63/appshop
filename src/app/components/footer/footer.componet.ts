import { Component } from '@angular/core';

@Component({
    selector: 'footer-custom',
    templateUrl: 'footer.component.html'
})

export class FooterCustom{

    constructor(){
        console.log("footer cargado!");
    }
}