import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Person, Name } from './person-data.model';

@Component({
  selector: 'summary-component',
  templateUrl: './summary.component.html'
})
export class SummaryComponent  {
   @Input() personData: Person;
   @Input() areAllFormsValid: boolean;
   @Output() submitButtonClicked = new EventEmitter();
   @Input('scrapedNameData') scrapedNameData: Name;


   buttonClicked(wasClicked: boolean){
    console.log('mainform wrapping tabs forms is valid? === ', this.areAllFormsValid)
    wasClicked ? this.personData.name = this.scrapedNameData : console.log('nope')
  }
}
