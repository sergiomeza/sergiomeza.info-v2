import { Sergiomeza.InfoPage } from './app.po';

describe('sergiomeza.info App', function() {
  let page: Sergiomeza.InfoPage;

  beforeEach(() => {
    page = new Sergiomeza.InfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
