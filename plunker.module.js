(function() {
  'use strict';

  angular
    .module('plunker', [])
    .run(moduleRun);


  function moduleRun() {
    console.log('app');
  }

})();