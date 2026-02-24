import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSuggestionComponent } from './suggestions.component'; 

describe('ListSuggestionComponent', () => {
  let component: ListSuggestionComponent;
  let fixture: ComponentFixture<ListSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSuggestionComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});