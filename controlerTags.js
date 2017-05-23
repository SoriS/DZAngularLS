submitExample.controller('BasicDemoCtrl', function ($timeout, $q) {
    var self = this;

    self.readonly = false;

    // Lists of fruit names and Vegetable objects
    self.roFruitNames = angular.copy(self.tags);

    self.tags = [];
});