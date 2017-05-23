submitExample.controller('BasicDemoCtrl', function ($scope, $timeout, $q) {
    var self = this;

    self.readonly = false;

    // Lists of fruit names and Vegetable objects
    self.FruitNames = angular.copy(self.tags);

    self.tags = ['zxczxczx', 'zzxczxc'];

    $scope.tags2 = [{ $chip: 'zxczxczx' }, { $chip: 'zzxczxc' }]

    self.newVeg = function ($chip) {
        $scope.tags2.push({ $chip });
    }
    self.remove = function ($chip) {
        var ind = $scope.tags2.find(function (e) { return e.$chip.indexOf($chip) !== -1 })
        $scope.tags2.splice(ind,1);
    }
});