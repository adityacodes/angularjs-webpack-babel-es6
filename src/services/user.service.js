import angular from 'angular';

class Users {

  constructor($http) {
    this.names = [];
    this.http = $http;
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

}

Users.$inject = ['$http'];

export default angular.module('service.user', [])
                      .service('userService', Users)
                      .name;