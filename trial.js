// function TodoCtrl($scope) {
  
//   $scope.todos = [
//     {text:'Learn AngularJS', done:false},         
  
//   ];
  
//   $scope.getTotalTodos = function () {
//     return $scope.todos.length;
//   };
  
  
//   $scope.addTodo = function () {
//     $scope.todos.push({text:$scope.formTodoText, done:false});
//     $scope.formTodoText = '';
//     $scope.desc = '';
    

//   $scope.clearCompleted = function () {
//         $scope.todos = _.filter($scope.todos, function(todo){
//             return !todo.done;
//         });
//     };
// }
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
  
  // $scope.saved = localStorage.getItem('todos');
  // $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS'} ];
  // localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.addTodo = function() {
    $scope.todos.push({
      text: $scope.todoText,
    
    });

    $scope.tododesc.push({
      text: $scope.todotext+ " " +$scope.desc,
    })
    localStorage.setItem('tododesc', JSON.stringify($scope.tododesc));


    // $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.todoText = '';
    $scope.desc = '';
    console.log("items entered successfully");
  };
//   for (var i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i))
// };
    $scope.clearCompleted = function () {
      $scope.tododesp.push({
      text: $scope.todoText,
   
    });
      


// $scope.todos.push({

// text: name,

// })
      

        // $scope.todos = _.filter($scope.todos, function(todo){
        //     return !todo.done;
        //     $scope.todos='';

        // });
    };
}



