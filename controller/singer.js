(function () {
    var app = angular.module('singer', []);

    app.controller('SingerController', ['$http', function ($http) {
            var singer = this;
            singer.description = [];

            $http.get('singer.json').success(function (data) {
                singer.description = data;
            });

        }]);

    app.directive('singer', ['$http', function ($http) {
            // Runs during compile
            return {
                // name: '',
                // priority: 1,
                // terminal: true,
                // scope: {}, // {} = isolate, true = child, false/undefined = no change
                controller: function () {
                    var singer = this;
                    singer.description = [];

                    $http.get("singer.json").success(function (data) {
                        singer.description = data;
                    });
                },
                controllerAs: 'singerCtrl',
                // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
                restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
                // template: '',
                templateUrl: 'singer-template.html',
                // replace: true,
                // transclude: true,
                // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
                // link: function($scope, iElm, iAttrs, controller) {

                // }
            };
        }]);
})();