(function functionName() {

  angular.module('contactApp')
    .factory(['contactApi', contactApi]);

  function contactApi($http, config) {
    var _getContacts = $http.get(config.baseUrl + '/contacts');

    return {
      getContacts: _getContacts
    };

  }

})();
