import ngRoute from 'angular-route';
import pagination from 'ui-bootstrap4/src/pagination';

import routes from './user.routes';
import UserController from './user';
import userService from '../../services/user.service';

import './user.css';

export default angular.module('user', [ngRoute, pagination, userService])
					  .config(routes)
					  .controller('UserController', UserController).name;