export default class UserController{
	
	constructor($scope, $location, userService, $routeParams){
		this.name = 'World';
		this.scope = $scope;
		this.location = $location;
		this.userService = userService;
		this.routeParams = $routeParams;
	}
	
	changeName(){
		this.location.url('/user/abcd');
	}

	getUsers(){
		this.userService.getUsers().then((result)=>{
			this.scope.users = result.data;
		});
	}

	showUser(){
		this.userService.getUserById(this.routeParams.id).then((result)=>{
			this.scope.single = result.data.data;
		});
	}

	myName(){
		return this.routeParams.id;
	}

}
UserController.$inject = ['$scope', '$location', 'userService', '$routeParams'];