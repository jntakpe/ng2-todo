import { Ng4TodoJocPage } from './app.po';

describe('ng4-todo-joc App', () => {
  let page: Ng4TodoJocPage;

  beforeEach(() => {
    page = new Ng4TodoJocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
