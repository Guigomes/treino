angular.module('treino')

.controller('DashCtrl', function ($scope, dadosFactory, $state) {

    var vm = this;

    dadosFactory.consultar().then(function (response) {

        vm.treinos = response.data.treinos;

    })

    vm.abrirTreino = abrirTreino;

    function abrirTreino(id) {

        $state.go('treino', {
            "id": id
        });
    }

})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('TreinoController', function ($scope, dadosFactory, $stateParams) {

        var vm = this;

        dadosFactory.consultar().then(function (response) {

            vm.treinos = response.data.treinos;

            for (var i in vm.treinos) {
                if (vm.treinos[i].id === $stateParams.id) {
                    vm.treino = vm.treinos[i].exercicios;
                }
            }

        })

    });
