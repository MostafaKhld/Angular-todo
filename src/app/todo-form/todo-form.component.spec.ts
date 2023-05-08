import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFormComponent } from './todo-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ]  ,
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Create New todo', () => {
    expect(component).toBeTruthy();
  });
});
