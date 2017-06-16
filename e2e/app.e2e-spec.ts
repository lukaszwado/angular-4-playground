import { Rico2Page } from './app.po';

describe('rico2 App', () => {
  let page: Rico2Page;

  beforeEach(() => {
    page = new Rico2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
