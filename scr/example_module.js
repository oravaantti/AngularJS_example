// This is my first module 
var my_module = angular.module("root_module", ["ngRoute", "ngResource"]);

// Configure routes
my_module.config(function($routeProvider){
    $routeProvider.when("/", {
        controller: "personController",
        templateUrl:"view1.html"
        
    }).when("/friends", {
        controller: "personController",
        templateUrl: "view2.html"
        
    }).when("/about", {
        templateUrl: "view3.html"
        
    }).otherwise({
        redirectTo:"/"
    });
});

// After creating module you can add controllers factories etc for it...
my_module.controller("personController", function($scope, personFactory, personService) {
    $scope.person = {};
    personFactory.getData().then(function(data) {
        $scope.person.data = data;
    });
    
    $scope.person.addPerson = function() {
        var tempData = {
            name: $scope.person.name,
            address: $scope.person.address,
            age: $scope.person.age
        };
        
        personFactory.addData(tempData);
        console.log(personFactory.getData());
        
        
    }
    
    personFactory.addData
});

// Create a factory. Factory is singleton, meaning there is only one instance of it
my_module.factory("personFactory", function($resource) {
    var my_factory = {};
    my_factory.data = [];
    
    my_factory.addData = function(person) {
        my_factory.data.push(person);
    }
    
    my_factory.getData = function() {
        var req = $resource("/friend", {}, {});
        
        return req.query().$promise;
    }
    
    return my_factory;
});

my_module.service("personService", function() {
    this.name = "Heikki";
    this.doSomething = function() {
        console.log("Hello world!");
    }
});