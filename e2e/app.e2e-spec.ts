import {NgTodoPage} from './app.po';

describe('ng-todo App', () => {
  let page: NgTodoPage;

  beforeEach(() => {
    page = new NgTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo APP');
  });
});
