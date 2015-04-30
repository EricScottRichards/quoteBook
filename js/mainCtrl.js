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

	$scope.deleteQuote = function(){
		dataService.removeData($scope.removeText);
		$scope.removeText='';
	};

	$scope.addToggle = false;
	$scope.removeToggle = false;
	$scope.filterToggle = false;

	$scope.changeToggle = function(){
		if($scope.property === 'add'){
			$scope.addToggle = true;
			$scope.removeToggle = false;
			$scope.filterToggle = false;
		} else if ($scope.property === 'remove'){
			$scope.removeToggle = true;
			$scope.addToggle = false;
			$scope.filterToggle = false;
		} else if ($scope.property === 'filter'){
			$scope.filterToggle = true;
			$scope.removeToggle = false;
			$scope.addToggle = false;
		}
	};

	// $scope.filterQuotes = function(){
	// };

	$scope.options = [
		{label: 'Add a quote', value: 'add'},
		{label: 'Remove a quote by text', value: 'remove'},
		{label: 'Filter quotes by text or author', value: 'filter'}
	];

});