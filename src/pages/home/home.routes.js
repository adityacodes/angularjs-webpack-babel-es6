routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
  require("html-loader!./home.html");
  require("html-loader!./show.html");

  $routeProvider
    .when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController',
		controllerAs: 'home'
    }).when('/home/:id', {
		templateUrl: 'views/show.html',
		controller: 'HomeController',
		controllerAs: 'home'
    });
}