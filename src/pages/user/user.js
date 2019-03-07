export default class UserController{
	
	constructor($scope, $location, userService, $routeParams){
		this.name = 'World';
		this.scope = $scope;
		this.location = $location;
		this.userService = userService;
		this.routeParams = $routeParams;
	}

	getUsers(page){
		let ctrl = this;
		ctrl.userService.getUsers(page).then((result)=>{

			ctrl.scope.pageChanged = function() {
				ctrl.getUsers(ctrl.scope.users.page);
			};

			ctrl.scope.users = result.data;
		
		});
	}

	showUser(){
		let ctrl = this;
		ctrl.userService.getUserById(ctrl.routeParams.id).then((result)=>{
			ctrl.scope.single = result.data.data;
		});
	}

}
UserController.$inject = ['$scope', '$location', 'userService', '$routeParams'];