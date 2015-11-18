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
            $state.go('profile', {}, {reload: false});            
        };
        $ionicLoading.show({
            template: 'Logging In...'
        });
        
        console.log($scope.user);
        $ionicLoading.hide();

        $state.go('profile'); //, {}, {reload: false});            
        //Login Logic here
        //AuthService.login($scope.user,provider).then(success,error).catch(function (error) {
        //    console.log(JSON.stringify(error));
        //});
    }
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

    $scope.submit = function() {
        if ($scope.money) {
            var query= $scope.money;

            IssuesResource.create({statements : [{
                statement:query
            }]});
        }
    };
})

.controller('DashCtrl', function($scope) {})

.factory('IssuesResource', function($resource){
    return $resource('http://192.168.1.229:8080/api/account/account', null, {
        create: {
            method: 'POST',
        }
    })
})
