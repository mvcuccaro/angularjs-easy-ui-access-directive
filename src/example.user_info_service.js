(function(){
  var myapp = angular.module('app');
        
  myapp.factory('UserInfoService', function(){
    var service = {
      getMemberGroups:getMemberGroups
    }

    function getMemberGroups(){
      return ['basic', 'admin'];
    }

    return service;
  });
})();
