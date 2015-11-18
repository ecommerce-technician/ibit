angular.module('starter.controllers', [])

    .factory('IssuesResource', function($resource){
        return $resource('http://192.168.1.229:8080/api/account/account', null, {
            create: {
                method: 'POST',
            }
        })
    })

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
