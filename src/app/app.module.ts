import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NameFormComponent } from './my-name-form.component';
import { PhoneFormComponent } from './my-phone-form.component';
import { WrapperComponent } from './wrapper.component';
import { SummaryComponent } from './summary.component';
import { TabsComponent } from './tabs.component';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, 
                  FormsModule, MatFormFieldModule, MatInputModule, MatTabsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, NameFormComponent, PhoneFormComponent, SummaryComponent, TabsComponent, WrapperComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
