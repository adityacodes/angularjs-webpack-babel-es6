import angular from 'angular';
import ngRoute from 'angular-route';

import routes from './home.routes';
import HomeController from './home';
import userService from '../../services/user.service';
import greet from '../../directives/greet.directive';

export default angular.module('home', [ngRoute, userService, greet])
					  .config(routes)
					  .controller('HomeController', HomeController).name;