import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { TotalSumComponent } from './components/total-sum/total-sum.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    SkillItemComponent,
    TotalSumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
