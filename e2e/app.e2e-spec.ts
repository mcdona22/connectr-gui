import { ConnectrGuiPage } from './app.po';

describe('connectr-gui App', () => {
  let page: ConnectrGuiPage;

  beforeEach(() => {
    page = new ConnectrGuiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
