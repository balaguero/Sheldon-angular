app.controller('PersonsController',function($scope, PersonFactory, LoanFactory, LoginFactory){

    LoginFactory.checkLogin();

    if(!localStorage['Persons']){
        var asd = [{name: 'Leonard', lastName: 'Leonard'},{name: 'Raj', lastName: 'Apu'}];
        localStorage['Persons'] = JSON.stringify(asd);
        location.path('#/persons');
    }
    
    $scope.Person = function(name,lastName){
        this.name = name;
        this.lastName = lastName;
    }

    $scope.createPerson = function(){
        if($scope.newPerson != undefined && $scope.newPerson.name){
            persons = PersonFactory.getPersons();
            newP = new $scope.Person($scope.newPerson.name, $scope.newPerson.lastName);
            persons.push(newP);
            $scope.persons = persons;
            localStorage['Persons'] = JSON.stringify($scope.persons);
        }
    }

    $scope.deletePerson = function(name, lastName){
        PersonFactory.deletePerson(name, lastName);
        $scope.persons = PersonFactory.getPersons();
    }

    $scope.$watch('persons', function () {  
        localStorage['Persons'] = JSON.stringify($scope.persons);
    }, true);


    $scope.persons = PersonFactory.getPersons();

});