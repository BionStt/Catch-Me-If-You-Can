﻿(function () {
    angular
        .module('catchMeApp')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$location', 'authenticationService', 'snackBarNotification', 'loadingDialogService'];

    function SignInController($location, authenticationService, snackBarNotification, loadingDialogService) {
        var signInVm = this;

        //view model
        signInVm.loginData = {
            Email: "",
            Password: ""
        };
        signInVm.login = login;

        //private functions
        function login(loginForm) {
            if (!loginForm.$invalid) {
                loadingDialogService.show();

                authenticationService.login(signInVm.loginData).then(function () {
                    $location.path('/Trips');
                    snackBarNotification.create(signInVm.loginData.Email + ', you have been successfully logged in.', 'OK');
                }, function (error) {
                    if (error.data.error_description) {
                        snackBarNotification.create(error.data.error_description, 'OK');
                    } else {
                        snackBarNotification.create("An error has been occured", 'OK');
                    }
                }).finally(function () {
                    loadingDialogService.hide();
                });
            } else {
                snackBarNotification.create("Login form has invalid fields", 'OK');
            }
        };
    };
})();