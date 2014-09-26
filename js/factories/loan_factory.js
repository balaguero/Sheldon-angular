app.factory('LoanFactory',  function(){

	var factory = {};

    // METHOD GETCOMIC
    factory.getLoans = function(){
       var loans = localStorage['Loans'] ? JSON.parse(localStorage['Loans']) : [];
       return loans;
    }

    factory.getLoansByComic = function(comicName){
        var loans = factory.getLoans();
        loans = loans.filter(function(element){
            return element.comic === comicName;
        });
        return loans;
    }


    factory.deleteLoan = function(comic, person){
        loans = factory.getLoans();
        loans = loans.filter(function(element){
            return element.comic != comic || element.person != person;
        });
        localStorage['Loans'] = JSON.stringify(loans);
    }

    factory.deleteLoanByComic = function(comic){
        loans = factory.getLoans();
        loans = loans.filter(function(element){
            return element.comic != comic;
        });
        localStorage['Loans'] = JSON.stringify(loans);
    }

    factory.deleteLoanByPerson = function(person){
        loans = factory.getLoans();
        loans = loans.filter(function(element){
            return element.person != person;
        });
        localStorage['Loans'] = JSON.stringify(loans);
    }


	return factory;
				
});