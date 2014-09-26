app.controller('LoginController', function($scope, LoginFactory, StaffFactory, localStorageService){
	
	$scope.users = StaffFactory.getStaff();

	$scope.canLogin = true;

	$scope.login = function(){
		$scope.canLogin = true;
		if($scope.loginUser.user == $scope.users[0].user && $scope.loginUser.pass == $scope.users[0].pass){
			LoginFactory.setLogin(true);
			$('#modalLogin').modal('hide');
			$scope.loginUser.user = "";
			$scope.loginUser.pass = "";
			if(window.location.hash == '#/visitors'){
				window.location.replace('#/comics');
			}
		}else{
			$scope.canLogin = false;
		}
	}

	$scope.logout = function(){
		LoginFactory.setLogin(false);
		window.location.replace('#/visitors');
	}

	$scope.isLogin = function(){
		return LoginFactory.isLogin();
	}

});