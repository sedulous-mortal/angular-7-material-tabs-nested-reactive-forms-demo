import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-phone-form',
  template: `
  <mat-form-field>
  <p>Phone Number<p>
  <input matInput name="phone" [(ngModel)]="phone">
  </mat-form-field>
 `,
})
export class PhoneFormComponent  {
  @Input() phone: string;
}