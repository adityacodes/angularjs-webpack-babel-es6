routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .when('/users', {
		template: require('./users.html'),
		controller: 'UserController',
		controllerAs: 'user'
    }).when('/user/:id', {
		template: require('./show.html'),
		controller: 'UserController',
		controllerAs: 'user'
    });
}