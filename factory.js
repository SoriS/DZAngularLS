storageService.factory('getLocalStorage', function () { 
     
var beginerDate =  new Date();
    

    var taskList ={
        items: [
            { purchase: "Поспать", done: false, status: true, dateS: beginerDate, dateE: "", rating: 1},
            { purchase: "Поесть", done: false, status: true, dateS: beginerDate, dateE: "", rating: 2},
            { purchase: "Попить", done: true, status: true, dateS: beginerDate, dateE: "", rating: 3},
            { purchase: "Покурить", done: false, status: true, dateS: beginerDate, dateE: "", rating: 4}
    ]};
            var copyTaskList = taskList;
                return {    
                    updateTask: function (TaskArr) {  
                        if (window.localStorage && TaskArr) {    
                            localStorage.setItem("items", angular.toJson(TaskArr));  
                        }  
                        taskList = TaskArr;  
                    },  

                    getTask: function () {    
                        taskList = angular.fromJson(localStorage.getItem("items"));  
                        return taskList ? taskList : copyTaskList.items;   
                    }  
                };  
  
            });