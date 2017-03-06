angular.module('treino').factory('dadosFactory', function ($http) {
    var dados;

    var url = ionic.Platform.isAndroid() ? "/android_asset/www/json/dados.json" : "../json/dados.json";
    return {
        consultar: function () {
            return $http.get(url);
        },
        getDados: function () {

            return dados;
        }
    }
});
