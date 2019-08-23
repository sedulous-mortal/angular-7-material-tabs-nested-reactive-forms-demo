import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Person } from './person-data.model';

@Component({
  selector: 'summary-component',
  templateUrl: './summary.component.html'
})
export class SummaryComponent  {
   @Input() personData: Person;
   @Input() areAllFormsValid: boolean;
   @Output() submitButtonClick = new EventEmitter();
}
