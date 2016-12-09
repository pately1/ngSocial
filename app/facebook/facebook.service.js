/**
 * Created by Yash on 12/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('ngSocial')
        .service('facebookService', ['$facebook','$q', function ($facebook, $q) {
            this.getInfo = function () {
                return $facebook.login()
            };

            this.logOut = function () {
              return $facebook.logout();
            };

            this.refreshMe = function () {
                return $facebook.api('/me?fields=id,name,email,locale,gender,first_name,last_name,picture,link,permissions,posts').then(
                    function (response) {
                        return response;
                    }, function (error) {
                         return $q.reject("Please Log in");
                    }
                );
            };
            this.postMe = function (post) {
                return $facebook.api('/me/feed', 'post', {message: post}).then(function (response) {
                    return response;
                });
            }
        }]);
})();