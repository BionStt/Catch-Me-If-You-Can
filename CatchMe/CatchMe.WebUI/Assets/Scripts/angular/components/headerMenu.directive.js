﻿(function () {
    angular
        .module('catchMeApp')
        .directive('headerMenu', headerMenuDirective);

    function headerMenuDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: '/Assets/Scripts/angular/templates/header.html',
            controller: 'HeaderMenuController',
            controllerAs: 'headerMenuVm',
            replace: true
        };

        return directive;
    };
})();