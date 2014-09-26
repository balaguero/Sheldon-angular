app.factory('ComicFactory',  function(LoanFactory){

	var factory = {};

    // METHOD GETCOMIC
    factory.getComics = function(){
       var comics = localStorage['Comics'] ? JSON.parse(localStorage['Comics']) : [];
       return comics;
    }

    factory.getLoanComics = function(){
        var comics = factory.getComics();
        var newComics = [];
        angular.forEach(comics, function(value, key) {
            if(value.copies > LoanFactory.getLoansByComic(value.name).length){
                this.push(value);
            }
        }, newComics);
        return newComics;
    }

    factory.deleteComic = function(comicName){
    	LoanFactory.deleteLoanByComic(comicName);
        var comics = factory.getComics();
        var newComics = [];
        newComics = comics.filter(function(element){
            return element.name != comicName;
        });
        localStorage["Comics"] = JSON.stringify(newComics);
    }

    factory.deleteComicByGender = function(gender){
    	var comics = factory.getComics();
    	newComics = comics.filter(function(element){
            if(element.gender != gender){
            	return element;
            	console.log(element);
            }else{
            	LoanFactory.deleteLoanByComic(element.name);
            }
        });
    	localStorage["Comics"] = JSON.stringify(newComics);
    }

	return factory;
				
});