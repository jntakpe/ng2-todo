/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskPipe } from './task.pipe';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent,
        TaskPipe
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('0) should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));

  it('0) should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#header h1').textContent).toContain('Todo APP');
  }));

  it('1) should display all task in uppercase', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const labels = compiled.querySelectorAll('.view label');
    const component = fixture.debugElement.componentInstance;
    labels.forEach((label, index) => {
      expect(label.textContent).toBe(component.tasks[index].label.toUpperCase());
    });
  }));

  it('2) should display selected style on ALL button by default', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const allLink = compiled.querySelector('#filters li:first-child a');
    expect(allLink.classList.contains('selected')).toBeTruthy('La classe selected devrait être appliquée par défault sur le lien all');
  }));

  it('2) should display selected style after click on filter link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const allLink = compiled.querySelector('#filters li:first-child a');
    const activeLink = compiled.querySelector('#filters li:nth-child(2) a');
    const completedLink = compiled.querySelector('#filters li:last-child a');
    expect(allLink.classList.contains('selected')).toBeTruthy('La classe selected devrait être appliquée par défault sur le lien all');
    expect(activeLink.classList.contains('selected')).toBeFalsy('La classe selected devrait être appliquée par défault sur le lien all');
    expect(completedLink.classList.contains('selected')).toBeFalsy('La classe selected devrait être appliquée par défault sur le lien all');
    activeLink.click();
    fixture.detectChanges();
    expect(allLink.classList.contains('selected')).toBeFalsy('La classe selected devrait être appliquée par défault sur le lien active');
    expect(activeLink.classList.contains('selected'))
      .toBeTruthy('La classe selected devrait être appliquée par défault sur le lien active');
    expect(completedLink.classList.contains('selected'))
      .toBeFalsy('La classe selected devrait être appliquée par défault sur le lien active');
    completedLink.click();
    fixture.detectChanges();
    expect(allLink.classList.contains('selected')).toBeFalsy('La classe selected devrait être appliquée par défault sur le lien completed');
    expect(activeLink.classList.contains('selected'))
      .toBeFalsy('La classe selected devrait être appliquée par défault sur le lien completed');
    expect(completedLink.classList.contains('selected'))
      .toBeTruthy('La classe selected devrait être appliquée par défault sur le lien completed');
    allLink.click();
    fixture.detectChanges();
    expect(allLink.classList.contains('selected')).toBeTruthy('La classe selected devrait être appliquée par défault sur le lien all');
    expect(activeLink.classList.contains('selected')).toBeFalsy('La classe selected devrait être appliquée par défault sur le lien all');
    expect(completedLink.classList.contains('selected')).toBeFalsy('La classe selected devrait être appliquée par défault sur le lien all');
  }));

  it('3) should display only active tasks after click on active link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const todoList = compiled.querySelector('#todo-list');
    expect(todoList.children.length).toBe(3, 'La todo list doit afficher les 3 tâches');
    const activeLink = compiled.querySelector('#filters li:nth-child(2) a');
    activeLink.click();
    fixture.detectChanges();
    expect(todoList.children.length).toBe(2, 'La todo list doit afficher les 2 tâches actives');
  }));

  it('3) should display only completed tasks after click on complete link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const todoList = compiled.querySelector('#todo-list');
    expect(todoList.children.length).toBe(3, 'La todo list doit afficher les 3 tâches');
    const completedLink = compiled.querySelector('#filters li:last-child a');
    completedLink.click();
    fixture.detectChanges();
    expect(todoList.children.length).toBe(1, 'La todo list doit afficher la tâche complète');
  }));

  it('3) should display all tasks after click on all link', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const todoList = compiled.querySelector('#todo-list');
    expect(todoList.children.length).toBe(3, 'La todo list doit afficher les 3 tâches');
    const completedLink = compiled.querySelector('#filters li:last-child a');
    completedLink.click();
    fixture.detectChanges();
    const allLink = compiled.querySelector('#filters li:first-child a');
    allLink.click();
    fixture.detectChanges();
    expect(todoList.children.length).toBe(3, 'La todo list doit afficher les 3 tâches');
  }));

});
