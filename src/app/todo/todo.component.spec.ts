import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoComponent } from './todo.component';
import { Todo } from '../models/todo';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
       schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo=(new Todo(1,"Task 1",false))
   fixture.detectChanges();
  });

  it('Displayed', () => {
    expect(component).toBeTruthy();
  });


  it('Check Todo', () => {
    component.onDone()
    expect(component.todo.completed).toBe(true);
  });

  it('Delete Todo', () => {
    var spy = spyOn(component, "onDelete").and.callThrough();
    expect(component).toBeDefined();
    const deleteButton = fixture.nativeElement.querySelector('#Delete')
    deleteButton.click()
    fixture.detectChanges();
  
    expect(component.onDelete).toHaveBeenCalled(); 
  });
});
