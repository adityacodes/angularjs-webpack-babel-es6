export default class HomeController{
	
	constructor($location, userService, $routeParams){
		this.name = 'World';
		this.location = $location;
		this.userService = userService;
		this.routeParams = $routeParams;
	}
	
	changeName(){
		console.log(this.location.url('/home'));
	}

	myName(){
		return this.routeParams.id;
	}

}
HomeController.$inject = ['$location', 'userService', '$routeParams'];