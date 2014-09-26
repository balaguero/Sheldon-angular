app.factory('LoginFactory',  function(localStorageService){

	var factory = {};

	factory.setLogin = function(bool){
		sessionStorage['Logged'] = JSON.stringify(bool);
	}

	factory.isLogin = function(){
		return JSON.parse(sessionStorage['Logged']);
	}

	factory.checkLogin = function(){
		logged = factory.isLogin();
		if(logged == false){
			window.location.replace('#/visitors');
		} 
	}

	return factory;
				
});