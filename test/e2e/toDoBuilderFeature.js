describe('To do list builder', function(){

  var taskBox = element(by.model('todoCtrl.newTask'))
  var taskButton = element(by.className('addBtn'))

  beforeEach(function(){
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('My todo list');
  });

  it('stores and displays tasks', function() {
    taskBox.sendKeys('Fill out my learning plan');
    taskButton.click();

    var tasks = element.all(by.repeater('task in todoCtrl.filtered'));

    expect(tasks.first().getText()).toEqual('Fill out my learning plan');
  });


});
