angular.module('treino').factory('dadosFactory', function ($http) {
    var dados;
    return {
        consultar: function () {
            if (ionic.Platform.isAndroid()) {
                $http.get("/android_asset/www/json/dados.json").then(function (response) {
                    dados = response.data;
                });
            } else {
                $http.get("../json/dados.json").then(function (response) {
                    dados = response.data;
                });
            }
        },
        getDados: function () {

            return dados;
        }
    }
});
