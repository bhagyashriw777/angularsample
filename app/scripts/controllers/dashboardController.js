app.controller('dashboardController', function($scope,$http){ 
    $scope.pools = [];

    $http.get('/api/dasboard').
    success(function(data, status, headers, config) {
        $scope.pools = data;	 
    });/*
    $scope.addVote = function(pooloptions){
    $http.get('/api/pooloption/addvote/'+ pooloptions.id).
        success(function(data, status, headers, config) {
        pooloptions.vote++;
        });
    }*/
});