app.controller('LoansController',function($scope, LoanFactory, ComicFactory, PersonFactory, LoginFactory){

    LoginFactory.checkLogin();

    //Add default LocalStorage
    if(!localStorage['Loans']){
        var asd = [{comic: 'Superman',person: 'Leonard'}];
        localStorage['Loans'] = JSON.stringify(asd);
    }

    $scope.Loan = function(comic, person){
        this.comic = comic;
        this.person = person;
    }

    $scope.loanComic = function(){
        if($scope.newLoan != undefined && $scope.newLoan.comic && $scope.newLoan.person){
            loan = LoanFactory.getLoans();
            comics = ComicFactory.getComics();

            var selectedComic = comics.filter(function(element){
                return element.name == $scope.newLoan.comic;
            });

            var comicLoans = loan.filter(function(element){
                return element.comic == $scope.newLoan.comic;
            });

            if (comicLoans.length < selectedComic[0].copies){
                loan.push(new $scope.Loan($scope.newLoan.comic,$scope.newLoan.person));
                localStorage['Loans'] = JSON.stringify(loan);
                $scope.loans = loan;
                $scope.comics = ComicFactory.getLoanComics();   
            }else{
                alert('ERROR: All '+$scope.newLoan.comic+' copies are loaned.');
            }
        }
    }

    $scope.deleteLoan = function(comic, person){
        LoanFactory.deleteLoan(comic, person);
        $scope.loans = LoanFactory.getLoans();
    }

    $scope.loans = LoanFactory.getLoans();
    $scope.comics = ComicFactory.getLoanComics();
    $scope.persons = PersonFactory.getPersons();
});