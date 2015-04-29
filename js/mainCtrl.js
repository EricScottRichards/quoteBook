var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService){

	$scope.getQuotes = function(){
		$scope.quotes = dataService.getData();
	}

	$scope.getQuotes();

});