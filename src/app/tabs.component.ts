import { Input, Component } from '@angular/core';
import { Person } from './person-data.model';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.component.html'
})
export class TabsComponent  {
   @Input() personData: Person;
}
