/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#header h1').textContent).toContain('Todo APP');
  }));

  it('should display 0 remaining tasks', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#todo-count strong').textContent).toBe('0 tâches restantes');
  }));

});
