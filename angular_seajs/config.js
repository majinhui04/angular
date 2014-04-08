define(function (require, exports, module) {
    var route = [
        {
            hash:'/test/a',
            controller:'testACtrl',
            controllerUrl:'modules/module1/testACtrl.js',
            templateUrl:'modules/module1/testA.tpl'
        },
        {
            hash:'/test/b/:id',
            controller:'testACtrl',
            controllerUrl:'modules/module2/testBCtrl.js',
            templateUrl:'modules/module2/testB.tpl.html'
        },
        {
            hash:'/main',
            controller:function($scope, $routeParams, $location){
	          $scope.str = new Date();
	          //console.log($routeParams,$location)
	        },
            template:'<div>{{str}}</div>'
        }
    ];
    var Global = {};

    Global.route = route || [];

    return Global;

});