import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { Router } from '@angular/router';
import { SuggestionService } from '../../services/suggestion.service'; 
@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  suggestions: Suggestion[] = [];
  favorites: Suggestion[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private suggestionService: SuggestionService) {} 

  ngOnInit(): void {
    this.suggestions = this.suggestionService.getSuggestions(); 
  }

  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onLike(suggestion: Suggestion): void {
    suggestion.nbLikes++;
  }

  onAddToFavorites(suggestion: Suggestion): void {
    const exists = this.favorites.find(f => f.id === suggestion.id);
    if (!exists) {
      this.favorites.push(suggestion);
    }
  }

  goToForm(): void {
    this.router.navigate(['/suggestions/add']);
  }
}