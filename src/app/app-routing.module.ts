import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  // Route par défaut → redirige vers /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Route statique /home
  { path: 'home', component: HomeComponent },

  // Route statique /listSuggestion
  { path: 'listSuggestion', component: ListSuggestionComponent },

  // Route lazy loading /suggestions (Partie 2)
  {
    path: 'suggestions',
    loadChildren: () =>
      import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule)
  },

  // Route lazy loading /users (Partie 2)
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then(m => m.UsersModule)
  },
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },

  // Route wildcard → 404
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }