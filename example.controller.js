(function(){
	let myapp = angular.module('app');
	myapp.controller('mycontroller', function($scope, UserInfoService){
		$scope.member_groups = UserInfoService.getMemberGroups();
		$scope.important_button_1_access_requirements = 'super, test';
		$scope.important_button_2_access_requirements = 'test, admin';
	})
})();