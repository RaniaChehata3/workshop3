import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // ← pipe date, ngIf, ngFor, ngClass
import { FormsModule } from '@angular/forms';     // ← ngModel
import { ReactiveFormsModule } from '@angular/forms'; // 👈 Ajouter
import { RouterModule, Routes } from '@angular/router'; // 👈 Ajouter

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { ListSuggestionComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
const routes: Routes = [
  { path: 'add', component: SuggestionFormComponent } 
];
@NgModule({
  declarations: [
    ListSuggestionComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,   
    FormsModule,    
    SuggestionsRoutingModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes) 
  ]
})
export class SuggestionsModule { }