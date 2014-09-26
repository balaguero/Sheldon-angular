app.controller('ComicsController',function($scope, GenderFactory, ComicFactory, LoanFactory, LoginFactory){

    LoginFactory.checkLogin();

    //Add default LocalStorage
    if(!localStorage['Comics'] || localStorage['Comics'] == "undefined"){
        var asd = [];
        localStorage['Genders'] = JSON.stringify(asd);
    }

    //CLASSES
    $scope.Comic = function(name, gender){
        this.name = name;
        this.gender = gender;
        this.copies = 1;
        this.rendered = [];
    };
    // END CLASSES

    $scope.createComic = function(){
        if($scope.newComic!=undefined && $scope.newComic.gender){
            comics = ComicFactory.getComics();
            var flag = 0;
            $(comics).each(function(){
                if(this.name === $scope.newComic.name){
                    flag += 1;
                    this.copies += 1;
                }
            });
            if(flag === 0){
                comics.push(new $scope.Comic($scope.newComic.name, $scope.newComic.gender));
            }
            localStorage.setItem("Comics",JSON.stringify(comics));
            $scope.comics = comics;

        }
        
    };


    $scope.deleteComic = function(comicName){
        //returnComic(comicName);
        ComicFactory.deleteComic(comicName);
        $scope.comics = ComicFactory.getComics();
    }


    //END GETTERS AND SETTERS

    //WATCHERS

    $scope.$watch('comics', function () {  
        localStorage['Comics'] = JSON.stringify($scope.comics);
    }, true);

    //END WATCHERS

    //SCOPE VARIABLES

    $scope.comics = ComicFactory.getComics();
    $scope.genders = GenderFactory.getGenders();
    //END SCOPE VARIABLES

});