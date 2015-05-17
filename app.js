'use strict';

angular.module("CheckAllModule", [])
    .directive('selectRow', function(){
        return {
            restrict: 'E',
            scope: {
                item: '=data'
            },
            template: '<input type="checkbox" ng-checked="item.Selected" ng-model="item.Selected">{{ item.Name }}'
        };
    })
    .directive('selectAll', function(){
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: function($scope) {

                $scope.Items = [{
                    Name: "Item one"
                }, {
                    Name: "Item two",
                    Selected: "true"
                }, {
                    Name: "Item three"
                }];

                $scope.selectedAll = false;

                $scope.selectAllToggle = function () {
                    $scope.selectedAll = !$scope.selectedAll;
                    angular.forEach($scope.Items, function (item) {
                        item.Selected = $scope.selectedAll;
                    });
                };
                    
                $scope.reverseSelect = function () {
                    
                    angular.forEach($scope.Items, function (item) {
                        item.Selected = !item.Selected;
                    });

                };
            },
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: '_select_all_tpl.html',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                
            }
        };
    });