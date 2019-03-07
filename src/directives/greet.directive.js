function greet() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: 'Hello {{name}}'
  }
}

export default angular.module('directive.greet', [])
					  .directive('greet', greet)
					  .name;