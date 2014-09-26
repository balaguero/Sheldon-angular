app.factory('GenderFactory',  function(ComicFactory){

	var factory = {};

    // METHOD GETCOMIC
    factory.getGenders = function(){
       var comics = localStorage['Genders'] ? JSON.parse(localStorage['Genders']) : [];
       return comics;
    }

    factory.deleteGender = function(gender){
    	ComicFactory.deleteComicByGender(gender);
    	var genders = factory.getGenders();
        var newGenders = [];
        newGenders = genders.filter(function(element){
            return element.name != gender;
        });
        localStorage["Genders"] = JSON.stringify(newGenders);
    }

	return factory;
				
});