(function() {
  'use strict';

  angular.module('app')
    .controller('SignupController', function ($scope, $http, $window, $location) {

      $scope.createUser = function () {

        $http.post('/api/v1/users/signup', $scope.user)
          .then(function (response) {
            $window.localStorage.setItem('token', response.data.token);
            $location.path('/')
          })

        // √ $http post /api/v1/users/signup
        // √ then
          // store token
          // redirect
        // catch
          // set $scope.errors (add to the view)

      }

    })

}());
