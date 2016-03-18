//set up a new AngularJS app and created a new controller
var app = angular.module('flapperNews', []);
app.controller('MainCtrl', [
  '$scope',
  //we declare a variable test in the controller and display its contents using the AngularJS {{}} notation
  function($scope) {
    //The $scope variable serves as the bridge between Angular controllers and Angular templates.
    //If you want something to be accessible in the template such as a function or variable, bind it to $scope
    $scope.test = 'Hello World!';
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}
    ];
    //When this function is invoked, it will append a new post to our $scope.posts variable
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === ""){ return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    }
  }
]);
