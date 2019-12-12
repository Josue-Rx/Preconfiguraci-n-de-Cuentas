var app = angular.module('myApp',['ngMaterial','ngMessages']);

app.controller('mainCtrl',['$scope', ($scope)=>{



	//Jquery
	$("#color").css("background","blue");
	$(".my-select").chosen({width:"100%"});
	 

}]);

