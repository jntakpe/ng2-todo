/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent
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

  it('1) should have 0 remaining tasks', async(() => {
    const component = fixture.debugElement.componentInstance;
    expect(component.remainingTasks).toBeDefined('La variable remainingTasks doit être créée');
    expect(component.remainingTasks).toBe(0, 'La variable remainingTasks doit être initialisée à 0');
  }));

  it('1) should display 0 remaining tasks', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#todo-count strong').textContent).toBe('0 tâches restantes',
      'Le nombre de tâches restantes (0) doit être affiché dans le span#todo-count');
  }));

  it('2) should have 3 tasks', async(() => {
    const component = fixture.debugElement.componentInstance;
    expect(component.tasks).toBeDefined('La variable tasks doit être créée');
    expect(component.tasks.length).toBe(3, 'Le tableau de tâches doit contenir 3 tâches');
  }));

  it('2) should display 3 tasks', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const todoList = compiled.querySelector('#todo-list');
    expect(todoList.children.length).toBe(3, 'La todo list doit afficher les 3 tâches');
    expect(todoList.querySelector('label[for="task"]').textContent).toBe(fixture.debugElement.componentInstance.tasks[0].label,
      'Le libelle de la tâche doit être affiché');
  }));

  it('3) should toggle tasks', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const initCompleted: boolean = fixture.debugElement.componentInstance.tasks[0].completed;
    const checkboxTask = compiled.querySelector('#task');
    checkboxTask.click();
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.tasks[0].completed).toBe(!initCompleted,
      'Cocher la checkbox #task doit changer la valeur du champ \'completed\' de la tâche associée');
  }));

  it('4) should add completed style on task', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const liElement = compiled.querySelector('#todo-list li');
    fixture.debugElement.componentInstance.tasks[0].completed = false;
    fixture.detectChanges();
    expect(liElement.classList.contains('completed'))
      .toBeFalsy('L\'élement "#todo-list li" ne devrait pas avoir la classe completed avant d\'être marqué comme fini');
    fixture.debugElement.componentInstance.tasks[0].completed = true;
    fixture.detectChanges();
    expect(liElement.classList.contains('completed'))
      .toBeTruthy('L\'élement "#todo-list li" devrait avoir la classe completed');
  }));

  it('5) should call removeTask method', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const btnDestroy = compiled.querySelector('.destroy');
    const component = fixture.debugElement.componentInstance;
    expect(component.removeTask).toBeDefined('La méthode removeTask doit être créée sur le composant');
    spyOn(component, 'removeTask');
    btnDestroy.click();
    expect(component.removeTask).toHaveBeenCalledTimes(1);
  }));

  it('5) should remove task from list', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const btnDestroy = compiled.querySelector('.destroy');
    const todoList = compiled.querySelector('#todo-list');
    const initLength = todoList.children.length;
    btnDestroy.click();
    fixture.detectChanges();
    expect(todoList.children.length).toBe(initLength - 1, 'Le clic sur le bouton supprimer doit enlever un élément de la liste');
  }));

  it('6) should call addTask method', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const todoInput = compiled.querySelector('#new-todo');
    const component = fixture.debugElement.componentInstance;
    expect(component.addTask).toBeDefined('La méthode addTask doit être créée sur le composant');
    spyOn(component, 'addTask');
    todoInput.value = 'Faire des tests';
    todoInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    expect(component.addTask).toHaveBeenCalledTimes(1);
  }));

  it('6) should add task to list', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const todoInput = compiled.querySelector('#new-todo');
    const todoList = compiled.querySelector('#todo-list');
    const initLength = todoList.children.length;
    todoInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();
    expect(todoList.children.length).toBe(initLength + 1, 'La touche entrée doit ajouter un élément à la liste');
  }));

  it('7) should call toggleAll method', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const toggleAllInput = compiled.querySelector('#toggle-all');
    const component = fixture.debugElement.componentInstance;
    expect(component.toggleAll).toBeDefined('La méthode toggleAll doit être créée sur le composant');
    spyOn(component, 'toggleAll');
    toggleAllInput.click();
    fixture.detectChanges();
    expect(component.toggleAll).toHaveBeenCalledTimes(1);
  }));

  it('7) should toggle all tasks', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const toggleAllInput = compiled.querySelector('#toggle-all');
    const component = fixture.debugElement.componentInstance;
    toggleAllInput.click();
    fixture.detectChanges();
    expect(component.tasks.filter(task => task.completed).length)
      .toBe(component.tasks.length, 'Toutes les tâches devraient être complétées suite au premier click sur la checkbox #toggle-all');
    toggleAllInput.click();
    fixture.detectChanges();
    expect(component.tasks.filter(task => task.completed).length)
      .toBe(0, 'Toutes les tâches devraient être activées suite au deuxième click sur la checkbox #toggle-all');
  }));

});
