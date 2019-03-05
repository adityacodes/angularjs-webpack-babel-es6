routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .when('/', {
		template: require('./home.html'),
		controller: 'HomeController',
		controllerAs: 'home'
    }).when('/home/:id', {
		template: require('./show.html'),
		controller: 'HomeController',
		controllerAs: 'home'
    });
}