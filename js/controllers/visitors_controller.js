app.controller('VisitorsController',function($scope, ComicFactory){

	$scope.comics = ComicFactory.getComics();

});