import { EnlightenedCitizenPage } from './app.po';

describe('enlightened-citizen App', () => {
  let page: EnlightenedCitizenPage;

  beforeEach(() => {
    page = new EnlightenedCitizenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
