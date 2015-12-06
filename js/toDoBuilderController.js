todolistBuilder.controller('ToDoBuilderController', [function(){
  var self = this;
  self.todoList = [];
  self.filtered = self.todoList;

  self.addItem = function(){
    var item = {
      "description": self.newTask,
      "completed": false
    }
    self.todoList.push(item);
    self.filtered = self.todoList;
    self.newTask="";
  },

  self.deleteItem = function(task){
    var idx = self.todoList.indexOf(task);
    self.todoList.splice(idx,1);
    self.filtered = self.todoList;
  },

  self.doneItem = function(task){
    var idx = self.todoList.indexOf(task);
    self.todoList[idx].completed = true;
    self.filtered = self.todoList;
  },

  self.allItem = function() {
    self.filtered = self.todoList;
  }

  self.activeItem = function() {
    self.filtered = self.todoList.filter(function(task){
        return task.completed == false;
    });
  }

}]);
