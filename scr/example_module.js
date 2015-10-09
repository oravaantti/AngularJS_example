// This is my first module 
var my_module = angular.module("root_module", ["ngRoute"]);

// Configure routes
my_module.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"view1.html"
        
    }).when("/friends", {
        
        templateUrl:"view2.html"
        
    }).otherwise({
        redirectTo:"/"
    });
});

// After creating module you can add controllers factories etc for it...

my_module.controller("personController", function($scope) {
    $scope.markus  = {};
    
    $scope.markus.some_data = "Hello";
    $scope.markus.age = 40;
    
    $.ajax({
       url: "http://localhost:28017/person/friends/",
        method: "GET",
        dataType: "jsonp",
        jsonp: "jsonp",
        beforeSend: function() { console.log("START"); },
        success: function(data, status) {
            $scope.$apply(function() {
                console.log("DONE");
                console.log(data);

                $scope.markus.headers = Object.keys(data.rows[0]);
                $scope.markus.actual_data = data.rows;
            });
        }
    });
});