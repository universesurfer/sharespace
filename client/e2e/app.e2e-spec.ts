import { SharespacePage } from './app.po';

describe('sharespace App', () => {
  let page: SharespacePage;

  beforeEach(() => {
    page = new SharespacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
