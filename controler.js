
submitExample.controller('ExampleController', ['$scope', 'getLocalStorage', function ($scope, getLocalStorage) {




    $scope.items = getLocalStorage.getTask();
    getLocalStorage.updateTask($scope.items);

    $scope.submit = function () {
        if ($scope.text === undefined || $scope.text === "") {
            return
        }
        $scope.items.push({ 'purchase': $scope.text, 'done': false, 'status': true, 'dateS': new Date() });
        getLocalStorage.updateTask($scope.items);
        $scope.text = '';
        console.log($scope.items)
    };
    $scope.Rename = function ($event, item) {
        item.status = !item.status;
    };
    $scope.onBlur = function ($event, item) {
        if (item.status === false) {
            item.status = !item.status;
            getLocalStorage.updateTask($scope.items);
        };
    };
    $scope.change = function (item) {
        if (item.done) {
            console.log("ITEMMMMM", item)
            item.dateE = new Date();

        }
        else {
            console.log("ITEMMMMM", item)
            item.dateE = "";

        }
        getLocalStorage.updateTask($scope.items);
    };
    $scope.onRating = function (rating, item) {
        console.log(item)
        getLocalStorage.updateTask($scope.items);
    }
    submitExample.filter('all', function () {
        return function (all) {
            if (all === false) {
                return items;
            }
        }
    });
    
    
}]);




