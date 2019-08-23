import { Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-name-form',
  template: `
  <form [formGroup]="nameForm">
    <mat-form-field>
      <p>First Name<p>
      <input matInput type="text" [value]=name.first formControlName="firstName">
    </mat-form-field>

    <mat-form-field>
      <p>Last Name<p>
      <input matInput type="text" [value]=name.last formControlName="lastName">
    </mat-form-field>
  </form>
  
`,
})
export class NameFormComponent implements OnChanges {
  @Input() name: string;
  nameForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  ngOnChanges(changes: SimpleChanges){
    console.log(this.name, this.nameForm)
    console.log('name form is ', this.nameForm.status)
  }
}
