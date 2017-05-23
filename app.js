var storageService = angular.module('storageService', []);
var BasicDemoCtrl = angular.module('BasicDemoCtrl',[])
var submitExample = angular.module('purchaseApp', ['storageService','jkAngularRatingStars','ngMaterial','BasicDemoCtrl'])
.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow');

  }).config(['$mdIconProvider', function($mdIconProvider) {
        $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
      }]);
    