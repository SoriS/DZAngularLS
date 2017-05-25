submitExample.controller('BasicDemoCtrl', function ($scope, $timeout, $q) {
    var self = this;
    
    self.readonly = false;

    // Lists of fruit names and Vegetable objects
    self.FruitNames = angular.copy(self.tags);

    self.tags = ['zxczxczx' , 'zzxczxc' ]

    self.newVeg = function ($chip) {
        if(self.tags.indexOf($chip) != -1)
        {return}
        console.log($chip)
       self.tags.push( $chip );
    }
    
    
});