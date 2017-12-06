import { Component } from '@angular/core';

/**
 * Generated class for the AccordeonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordeon',
  templateUrl: 'accordeon.html'
})
export class AccordeonComponent {

  text: string;

  constructor() {
    console.log('Hello AccordeonComponent Component');
    this.text = 'Hello World';
  }

}
