app.factory('PersonFactory',  function(LoanFactory){

	var factory = {};

    // METHOD GETCOMIC
    factory.getPersons = function(){
       var persons = localStorage['Persons'] ? JSON.parse(localStorage['Persons']) : [];
       return persons;
    }

    factory.deletePerson = function(name, lastName){
    	LoanFactory.deleteLoanByPerson(name);
        persons = factory.getPersons();
        persons = persons.filter(function(element){
            return element.name != name && element.lastName != lastName;
        });
        localStorage['Persons'] = JSON.stringify(persons);
    }

	return factory;
				
});