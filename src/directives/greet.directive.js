import angular from 'angular';

function greet() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: 'Hello {{name}}</div>'
  }
}

export default angular.module('directive.greet', [])
					  .directive('greet', greet)
					  .name;