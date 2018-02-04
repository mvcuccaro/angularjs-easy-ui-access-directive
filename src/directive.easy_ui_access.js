(function(){
	angular.module('app').directive('accessRequirements', ['UserInfoService', accessRequirements]);

	function accessRequirements(UserInfoService){
	return {
		restrict: 'A',
		priority:200,
		scope: {
			accessRequirements:'@'
		},
		replace: false,
		link: function(scope, element, attrs) {
			//what is the element
			let element_type = element[0].tagName.toLowerCase();

			turnElementOff(element_type)

			//get the groups the member is subscribed to
			member_groups = userInfoService.getMemberGroups();

			//parse the access requirement groups string
			let REGEX = /\s*,\s*/
			let access_array = scope.accessRequirements.split(REGEX);

			//see if the member is subscribed to any of the required groups
			let has_access = access_array.some(function(test){
				return member_groups.indexOf(test) != -1;
			});

			//enable the element if the user has access
			if( has_access ){
				turnElementOn(element_type);
			}

			//use the proper case to turn off the element
			function turnElementOff(arg_element_type){
				switch( arg_element_type ){
					case 'button':
						//disable the element by default
						element.prop('disabled', true);
						break;

					case 'div':
						element.css('pointer-events', 'none');
						element.css('opacity', '0.4');
						break;

					case 'input':
					case 'textarea':
						element.prop('readonly', true);
						element.prop('disabled', true);
						break;

					case 'select':
						element.prop('readonly', true);
						break;
				}
			}

			//use the proper case to turn on the element
			function turnElementOn(arg_element_type){
				switch( arg_element_type ){
					case 'button':
						element.prop('disabled', false);
						break;

					case 'div':
						element.css('pointer-events', 'auto');
						element.css('opacity', '1');
						break;

					case 'input':
					case 'textarea':
						element.prop('readonly', false);
						element.prop('disabled', false);
						break;

					case 'select':
						element.prop('readonly', false);
						break;

				}
			}
		}	
	};
}
})();
