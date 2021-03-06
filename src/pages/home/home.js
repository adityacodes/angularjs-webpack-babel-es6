export default class HomeController{
	
	constructor($scope, $location, userService, $routeParams){
		this.name = 'World';
		this.scope = $scope;
		this.location = $location;
		this.userService = userService;
		this.routeParams = $routeParams;
	}
	
	changeName(){
		this.location.url('/home/abcd');
	}

	getUsers(){
		this.userService.getUsers().then((result)=>{
			this.scope.users = result.data;
		});
	}

	myName(){
		return this.routeParams.id;
	}

}
HomeController.$inject = ['$scope', '$location', 'userService', '$routeParams'];