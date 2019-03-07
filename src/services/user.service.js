class Users {

  constructor($http) {
    this.names = [];
    this.http = $http;
  }

  getUsers(page) {
	 return this.http.get('https://reqres.in/api/users?page='+page);
  }

  getUserById(id){
  	return this.http.get('https://reqres.in/api/users/'+id);
  }

}

Users.$inject = ['$http'];

export default angular.module('service.user', [])
                      .service('userService', Users)
                      .name;