var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService){

	$scope.getQuotes = function(){
		$scope.quotes = dataService.getData();
	}
	
	$scope.getQuotes();

	$scope.addQuote = function(){
		dataService.addData($scope.textInput, $scope.authorInput);
		$scope.textInput = '';
		$scope.authorInput = '';
	}

});