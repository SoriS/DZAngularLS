submitExample.controller('BasicDemoCtrl', function ($scope, $timeout, $q) {
    var self = this;

    self.readonly = false;

    // Lists of fruit names and Vegetable objects

    self.tags = [
        {
            name: 'zxczxczx1',
            style: "red",
        },
        {
            name: 'zzxczxc2',
            style: "blue"
        }]

     self.tags2 = [];
    self.newVeg = function ($chip) {

        var tagsName = self.tags.map(e => e.name)
        if (self.tags.indexOf($chip) !== -1) {
            return
        }
        return {
            name: $chip,
            style: "orange"
        }
    }


}).directive('customChip', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var chipClass = scope.$chip.style;
            var mdChip = elem.parent().parent();
            mdChip.addClass(chipClass);
        }
    }
});