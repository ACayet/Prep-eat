import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRecipeComponent } from './remove-recipe.component';

describe('RemoveRecipeComponent', () => {
  let component: RemoveRecipeComponent;
  let fixture: ComponentFixture<RemoveRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
