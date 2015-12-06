describe('ToDoBuilderController', function(){
  beforeEach(module('ToDoBuilder'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoBuilderController');
  }));

  it('initialises with an empty to-do list', function() {
    expect(ctrl.todoList).toEqual([]);
  });


  describe('when storing tasks', function(){

    it('displays the tasks', function(){
      ctrl.newTask = "Fill out my learning plan";
      ctrl.addItem();
      ctrl.newTask = "Complete my week-end challenge";
      ctrl.addItem();
      expect(ctrl.todoList).toEqual(tasks)
    });

    it('can be deleted', function(){
      ctrl.newTask = "Fill out my learning plan";
      ctrl.addItem();
      ctrl.deleteItem(ctrl.todoList[0]);
      expect(ctrl.todoList).toEqual([])
    });

    it('can be marked as done', function(){
      ctrl.newTask = "Fill out my learning plan";
      ctrl.addItem();
      ctrl.doneItem(ctrl.todoList[0]);
      expect(ctrl.todoList[0].completed).toEqual(true)
    });

    it('can filter completed tasks', function(){
      ctrl.newTask = "Fill out my learning plan";
      ctrl.addItem();
      ctrl.newTask = "Complete my week-end challenge";
      ctrl.addItem();
      ctrl.doneItem(ctrl.todoList[0]);
      ctrl.activeItem();
      expect(ctrl.filtered).toEqual([ctrl.todoList[1]])
    });

  });

});
