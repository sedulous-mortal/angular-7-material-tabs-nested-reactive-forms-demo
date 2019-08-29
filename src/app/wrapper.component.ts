import { Input, Component } from '@angular/core';
import { Name, Person } from './person-data.model';

@Component({
  selector: 'wrapper-component',
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent  {
  areAllFormsValid: boolean;

  personData: Person = {
    name: {
      first: 'Alicia',
      last: 'Turret',
    },
    phone: '123-456-7890',
  }
}