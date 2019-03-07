import angular from 'angular';
import ngRoute from 'angular-route';

import routes from './user.routes';
import UserController from './user';
import userService from '../../services/user.service';

import './user.css';

export default angular.module('user', [ngRoute, userService])
					  .config(routes)
					  .controller('UserController', UserController).name;