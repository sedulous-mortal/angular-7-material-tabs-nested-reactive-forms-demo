import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Name } from './person-data.model';

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
  @Output() nameData = new EventEmitter<Name>();

  nameForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  ngOnChanges(changes: SimpleChanges){
    console.log(this.name, this.nameForm)
    console.log('name form is ', this.nameForm.status)
  }

  ngOnInit(){
    this.nameForm.valueChanges.subscribe( (changes: SimpleChanges) => {
      console.log(changes)
      this.nameData = this.nameForm.value;
    })
  }
}
