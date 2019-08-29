import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Name } from './person-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-name-form',
  template: `
  <form [formGroup]="nameForm">
    <mat-form-field>
      <p>First Name<p>
      <input matInput type="text" formControlName="firstName">
    </mat-form-field>

    <mat-form-field>
      <p>Last Name<p>
      <input matInput type="text" formControlName="lastName">
    </mat-form-field>
  </form>
`,
})

export class NameFormComponent implements OnChanges {
  @Input() name: Name;
  @Output() nameData = new EventEmitter<Name>();
  nameChangeSubscription: Subscription;

  nameForm= new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.minLength(2)),
  })

  ngOnInit(){
    this.nameChangeSubscription = this.nameForm.valueChanges.subscribe( (changes: SimpleChanges) => {
      console.log(changes)
      this.nameData.emit(this.nameForm.value);
    })
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.name, this.nameForm)
    console.log('name form is ', this.nameForm.status)
  }

  ngAfterContentInit(){
    if(this.name){
    this.nameForm.controls['firstName'].setValue(this.name.first)
    this.nameForm.controls['lastName'].setValue(this.name.last)
    }
  }

  ngOnDesroy(){
    this.nameChangeSubscription ? this.nameChangeSubscription.unsubscribe() : console.log('');
  }
}
