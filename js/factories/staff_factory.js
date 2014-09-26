app.factory('StaffFactory',  function(){

	var factory = {};

	var users = [];
	users.push({user: 'Sheldon', pass: 'Bazinga'});

    // METHOD GETCOMIC
    factory.getStaff = function(){
       return users;
    }

	return factory;
				
});