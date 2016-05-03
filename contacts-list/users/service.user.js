(function functionName() {

  angular.module('contactApp')
    .factory('contactApi', contactApi);

  function contactApi($http, config) {
    var _getContacts = function () {
      return $http.get(config.baseUrl + '/contacts');
    };

    var _postContacts = function (contato) {
      return $http.get(config.baseUrl + '/contacts');
    };

    return {
      getContacts: _getContacts,
      postContacts: _postContacts
    };

  }

})();
