import angular from 'angular';
import ngRoute from 'angular-route';
import app from './app.config';
import home from './pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';

angular.module(app.name, [ ngRoute, home ])
		.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
				  $locationProvider.html5Mode(true);
				  $routeProvider.otherwise('/');
			}]);


