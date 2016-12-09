/**
 * Created by Yash on 12/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('ngSocial', ['ngFacebook', 'ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/facebook', {
                    templateUrl: '../app/facebook/facebook.html',
                    controller: 'FacebookCtrl'
                })
                .otherwise({redirectTo:'/facebook'});
        }])
        .config(['$facebookProvider', function ($facebookProvider) {
            $facebookProvider.setAppId("446513895736423");
            $facebookProvider.setPermissions(["email", "public_profile", "user_posts", "publish_actions", "user_photos"]);
        }])
        .run(['$rootScope', function ($rootScope) {
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }]);
})();