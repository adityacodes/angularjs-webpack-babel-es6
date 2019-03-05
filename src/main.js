import angular from 'angular';
import ngRoute from 'angular-route';
import collapse from 'ui-bootstrap4/src/collapse';
import dropdown from 'ui-bootstrap4/src/dropdown';
import app from './app.config';

// Global Styles Import
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Pages Modules Import
import home from './pages/home';


angular.module(app.name, [ ngRoute, home, collapse, dropdown ])
		.config(['$routeProvider', '$locationProvider', 
				($routeProvider, $locationProvider) => {
					  $locationProvider.html5Mode(true);
					  $routeProvider.otherwise('/');
				}])
		.run(['$rootScope', ($rootScope)=>{
				  $rootScope.isNavCollapsed = true;
				  $rootScope.isCollapsed = false;
				  $rootScope.isCollapsedHorizontal = false;
				  $rootScope.items = [
				    'The first !',
				    'And another',
				    'but wait! !'
				  ];

				  $rootScope.status = {
				    isopen: false
				  };
		}]);

angular.bootstrap(document, [app.name], { strictDi: true });