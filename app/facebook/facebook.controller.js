/**
 * Created by Yash on 12/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('ngSocial')
        .controller('FacebookCtrl', ['$scope','facebookService', function ($scope, facebookService) {
            $scope.signIn = function () {
                facebookService.getInfo().then(function () {
                    $scope.isLoggedIn = true;
                    refresh();
                });
            };

            $scope.signOut = function () {
                facebookService.logOut().then(function () {
                    $scope.isLoggedIn = false;
                    refresh();
                });
            };

            $scope.post = function () {
                var body = this.body;
                facebookService.postMe(body).then(function (response) {
                   $scope.msg = "Thanks for posting.";
                    refresh();
                });
            };

            function refresh() {
              facebookService.refreshMe().then(function (response) {
                  $scope.userInfo = response;
                  console.log($scope.userInfo);
                  $scope.picture = response.picture.data.url;
                  $scope.msg = "Welcome " + response.name;
                  $scope.permissions = response.permissions.data;
                  $scope.posts = response.posts.data;
              }, function (err) {
                  $scope.msg = "Please Log in";
              });
            }

            refresh();
        }]);
})();