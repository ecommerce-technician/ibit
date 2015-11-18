angular.module('app.controllers', [])
  
.controller('loginCtrl',['$scope','$ionicLoading','$ionicPopup','$state', function($scope,$ionicLoading,$ionicPopup,$state) {

    $scope.user = {};
    
    $scope.login = function()
    {
        var error = function(error)
        {
            $ionicLoading.hide();
            $scope.error = error.data.msg;

            $ionicPopup.show({
                templateUrl: 'templates/modal/error.html',
                title: 'Error',
                scope: $scope,
                buttons: [
                    { text: 'Ok' }
                ]
            });
        };

        var success = function(response) {
            $ionicLoading.hide();
            $scope.clearForms();

            //$state.go('app.dashboardget', {}, {reload: true});
        };
        $ionicLoading.show({
            template: 'Logging In...'
        });
        
        console.log($scope.user);
        //Login Logic here
        //AuthService.login($scope.user,provider).then(success,error).catch(function (error) {
        //    console.log(JSON.stringify(error));
        //});
    }
}]);

