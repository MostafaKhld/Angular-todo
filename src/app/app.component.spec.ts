import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Todo } from './models/todo';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`App Title is visble`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular-todo');
  });

  it(`Mapping todos`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
      const [t1 ,t2]= [new Todo(1,"Task 1",false) ,new Todo(2,"Task 2",false)]

      app.todos=[t1,t2]
      fixture.detectChanges()
      expect(app.todos.length).toBe(2)
   
  });

});
