import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-name-form',
  template: `
  <form [formGroup]="nameForm">
    <mat-form-field>
      <p>First Name<p>
      <input matInput type="text" [value]=name.first formControl="firstNameForm">
    </mat-form-field>

    <mat-form-field>
      <p>Last Name<p>
      <input matInput type="text" [value]=name.last formControl="lastNameForm">
    </mat-form-field>
  </form>
  
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
