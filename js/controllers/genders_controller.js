app.controller('GendersController',function($scope, LoginFactory, GenderFactory, LoanFactory){

    LoginFactory.checkLogin();

    if(!localStorage['Genders'] || localStorage['Genders'] == 'Undefined'){
        var asd = [{name: 'Superheroes'},{name: 'Science Fiction'}];
        localStorage['Genders'] = JSON.stringify(asd);
    }

    $scope.Gender = function(name){
        this.name = name;
    }

    $scope.createGender = function(){
        if($scope.newGender!=undefined && $scope.newGender.name){
            genders = GenderFactory.getGenders();    
            var flag = 0;
            $(genders).each(function(){
                if(this.name === $scope.newGender.name){
                    alert(this.name + 'is alredy exists. Can\'t create it');
                    flag += 1;
                }
            });
            if(flag === 0){
                genders.push(new $scope.Gender($scope.newGender.name));
            }
            localStorage["Genders"] = JSON.stringify(genders);
            $scope.genders = genders;
        }
    }

    $scope.deleteGender = function(gender){
        GenderFactory.deleteGender(gender);
        $scope.genders = GenderFactory.getGenders();
    }

    $scope.genders = GenderFactory.getGenders();


});