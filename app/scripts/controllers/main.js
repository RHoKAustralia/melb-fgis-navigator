'use strict';

angular.module('navigatorApp').controller('MainCtrl', function ($scope) {

  console.log('$scope', 'MainCtrl');

  angular.extend($scope, {
    london: {
      lat: 51.505,
      lng: -0.09,
      zoom: 4
    }
  });

});
