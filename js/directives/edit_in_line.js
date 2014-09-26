app.directive( 'editInLine', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span class="show link light_blue" ng-click="edit()" ng-bind="value"></span><input type="text" ng-model="value" class="form-control validate-text hide" placeholder="" ng-blur="finishEdit()" />',
    link: function ( $scope, element, attrs ) {
    	
    	var spanElement = angular.element( element.children()[0] );
    	var inputElement = angular.element( element.children()[1] );

    	$scope.edit = function () {


		spanElement.removeClass('show').addClass('hide');
		inputElement.removeClass('hide').addClass('show');

		// `angular.element()` provides a chainable array, like jQuery so to access a native DOM function, 
        // we have to reference the first element in the array.
		inputElement[0].focus();

	};

	$scope.finishEdit = function ( ) {
		inputElement.removeClass('show').addClass('hide');
		spanElement.removeClass('hide').addClass('show');		
	};
    }

  };
});