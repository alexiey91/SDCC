var app = angular.module("myApp", []);

app.controller("testLogin", function($scope,$http,$window,$location) {
  var dat = {
        "number" : "10"
  }
  /*$http.post('http://10.200.43.118:3000/roulette/postrand/',dat)
 .then(function(response) {
     console.log("Done"+response.data);
 });*/
 $scope.registration= function(){
  console.log("registration");

          var new_user = {

            "FirstName":document.getElementById('FirstName').value,
            "LastName":document.getElementById('LastName').value,
            "email":document.getElementById('email').value,
            "password":document.getElementById('password').value
          }

          console.log("new_user"+ JSON.stringify(new_user));
          $http.post('http://ec2-54-70-33-109.us-west-2.compute.amazonaws.com:8080/login',new_user)
         .then(function(response) {
             console.log("Done"+response.data.link);
             $window.location.href=response.data.link;

           //  $window.location.href = response.data.link;
         },function(response){
           console.log("MAnnaggia");
           //$window.location.href=$location.path('http://www.google.it');
         //$window.location.href='http://192.168.0.6:1000/router/';
         });
};

$scope.access= function(){
 console.log("access");

         var user_access = {

           "email":document.getElementById('user_login').value,
           "password":document.getElementById('password_login').value
         }

         console.log("new_user"+ JSON.stringify(user_access));
         $http.post('http://ec2-54-70-33-109.us-west-2.compute.amazonaws.com:8080/login',user_access)
        .then(function(response) {
            console.log("Done"+response.data.link);
            $window.location.href=response.data.link;

          //  $window.location.href = response.data.link;
        },function(response){
          console.log("MAnnaggia");
          alert("Credenziali errate");
          //$window.location.href=$location.path('http://www.google.it');
        //$window.location.href='http://192.168.0.6:1000/router/';
        });
};

//  $http.post('http://ec2-54-70-33-109.us-west-2.compute.amazonaws.com:8080/login',dat)
// .then(function(response) {
//     console.log("Done"+response.data.link);
//     $window.location.href=response.data.link;
//
//   //  $window.location.href = response.data.link;
// },function(response){
//   console.log("MAnnaggia");
//   //$window.location.href=$location.path('http://www.google.it');
// //$window.location.href='http://192.168.0.6:1000/router/';
// });
});
