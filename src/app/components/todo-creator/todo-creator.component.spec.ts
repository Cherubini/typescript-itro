import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreatorComponent } from './todo-creator.component';

describe('TodoCreatorComponent', () => {
  let component: TodoCreatorComponent;
  let fixture: ComponentFixture<TodoCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCreatorComponent]
    });
    fixture = TestBed.createComponent(TodoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
