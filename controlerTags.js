submitExample.controller('BasicDemoCtrl', function ($scope, $timeout, $q) {
    var self = this;
    
    self.readonly = false;

    // Lists of fruit names and Vegetable objects
    self.FruitNames = angular.copy(self.tags2);

    self.tags2 = ['zxczxczx' , 'zzxczxc' ]

    self.newVeg = function ($chip) {
        if(self.tags2.indexOf($chip) != -1)
        {return}
        console.log($chip)
       self.tags2.push( $chip );
    }
    self.remove = function ($chip) {
        var ind = self.tags2.indexOf({$chip})
        self.tags2.splice(ind,1);
    }
    
});