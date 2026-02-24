import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class ListSuggestionComponent implements OnInit {

  suggestions: Suggestion[] = []; 
  searchTerm: string = '';

  constructor(
    private router: Router,
    private suggestionService: SuggestionService 
  ) {}

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

  goToDetail(id: number): void {
    this.router.navigate(['/suggestions', id]);
  }

  goToForm(): void {
    this.router.navigate(['/suggestions/add']);
  }
}