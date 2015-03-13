angular.module('bossy.menu', [])
	.controller('bossyMenu', function($scope){
		$scope.data = [
			{
				name: "Item 1",
				slug: "item1"
			},{
				name: "Item 2",
				slug: "item2"
			}
		];
		$scope.menuItem = function(item) {
			if(angular.isObject(item)) {
				return item.name;
			} else {
				return item.name;
			}
		}
	})
	.directive('bossyMenu', function() {
	  return {
	  	controller: 'bossyMenu',
	  	restrict: 'E',
	  	scope: {
	  		menu: "="
	  	},
	    template: "<ul>"+
	    	"<li ng-repeat=\"item in menu\">"+
	    		"<a href=\"\" ng-bind=\"menuItem(item)\"></a>"+
	    	"</li>" +
	    "</ul>"
	  };
	});