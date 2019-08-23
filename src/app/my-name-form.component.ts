import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-name-form',
  template: `
  <ng-template matTabContent #nameForm>
    <mat-form-field>
      <p>First Name<p>
      <input matInput [value]=name.first formControl="firstNameForm">
    </mat-form-field>

    <mat-form-field>
      <p>Last Name<p>
      <input matInput [value]=name.last formControl="lastNameForm">
    </mat-form-field>
  </ng-template>
  <ng-container *ngTemplateOutlet="nameForm"></ng-container>
`,
})
export class NameFormComponent implements OnChanges {
  @Input() name: string;
  nameForm= new FormGroup({
    firstNameForm: new FormControl(''),
    lastNameForm: new FormControl(''),
  })

  ngOnChanges(changes: SimpleChanges){
    console.log(this.name, this.nameForm)
  }
}
