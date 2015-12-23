describe('Home Pages', function() {

  //var ptor = protractor.getInstance();

  it('should load the homepage', function() {
    browser.get('/#');
    expect(element(by.id('view-container')).getText()).toBe('Welcome Home...');
  });

});
