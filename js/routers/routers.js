app.config(function ($routeProvider){
$routeProvider
    .when ('/',
        {
            controller:'VisitorsController',
            templateUrl:'templates/visitors/visitors.html'
        })
    .when ('/comics',
        {
            controller:'ComicsController',
            templateUrl:'templates/comics/comics.html'

        })
    .when ('/persons',
        {
            controller:'PersonsController',
            templateUrl:'templates/persons/persons.html'

        })

    .when ('/loans',
        {
            controller:'LoansController',
            templateUrl:'templates/loans/loans.html'

        })

    .when ('/genders',
        {
            controller:'GendersController',
            templateUrl:'templates/genders/genders.html'

        })

    .when ('/visitors',
        {
            controller:'VisitorsController',
            templateUrl:'templates/visitors/visitors.html'

        })
});