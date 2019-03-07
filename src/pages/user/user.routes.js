routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {

	require("html-loader!./users.html");
	require('html-loader!./showuser.html');

	$routeProvider
    .when('/users', {
		templateUrl: "views/users.html",
		controller: 'UserController',
		controllerAs: 'user'
    }).when('/user/:id', {
		templateUrl: "views/showuser.html",
		controller: 'UserController',
		controllerAs: 'user'
    });
    
}