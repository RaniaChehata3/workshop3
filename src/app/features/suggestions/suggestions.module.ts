import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // ← pipe date, ngIf, ngFor, ngClass
import { FormsModule } from '@angular/forms';     // ← ngModel

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';

@NgModule({
  declarations: [
    ListSuggestionComponent,
    SuggestionDetailsComponent
  ],
  imports: [
    CommonModule,   // ← obligatoire pour les directives et pipes Angular
    FormsModule,    // ← obligatoire pour [(ngModel)]
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }