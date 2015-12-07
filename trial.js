
function TodoCtrl($scope) {
  if (localStorage) {
    console.log("LocalStorage is supported!");
  } else {
    console.log(" No support.")
  }
  $scope.todos = [
    // {text:'Learn AngularJS', done:false},         
    ];
    $scope.tododesc=[];
    localStorage.clear();
    $scope.getTotalTodos = function () {
      return $scope.todos.length;
    };

  

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,

    });

    $scope.tododesc.push({
      text: $scope.todotext+ " " +$scope.desc,
    })
    localStorage.setItem('tododesc', JSON.stringify($scope.tododesc));


   
    $scope.todoText = '';
    $scope.desc = '';
    console.log("items entered successfully");
  };

$scope.clearCompleted = function () {
  $scope.tododesp.push({
    text: $scope.todoText,

  });




};
}



