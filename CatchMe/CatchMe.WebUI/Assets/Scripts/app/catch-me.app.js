﻿(function () {
    angular.module('catchMeApp', [
            'ngRoute',
            'ngAnimate',
            'ngMaterial',
            'ngMessages',
            'ngMaterialDatePicker',
            'ui.utils.masks',
            'snackBarNotification',
            'LocalStorageModule'
    ])
        .run([
            '$rootScope', '$timeout', function ($rootScope, $timeout) {
                $rootScope.$on('$viewContentLoaded', function () {                    
                    $timeout(function () {
                        componentHandler.upgradeAllRegistered();
                    });
                });
            }
        ]);
})();