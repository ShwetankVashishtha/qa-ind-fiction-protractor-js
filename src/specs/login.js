describe('angularjs homepage todo list', function() {
  it("Banking Application - Launch", function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/banking');
    expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
  });

  it("Click Customer Login button", function() {
    element(by.xpath("//button[@class='btn btn-primary btn-lg']")).click();
    expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
  });

  it("Select Harry Potter from drop down", function() {
    element(by.xpath("//select[@id='userSelect']")).click();
    element(by.xpath("//select[@id='userSelect']/option[@value='2']")).click();
  });

  it("Click User Login button", function() {
    element(by.xpath("//button[@class='btn btn-default']")).click();
  });

  it("Click User Logout button", function() {
    element(by.xpath("//button[@class='btn logout']")).click();
  });

  it("Redirect to Home Page", function() {
    element(by.xpath("//button[@class='btn home']")).click();
  });
});
