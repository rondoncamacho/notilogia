angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
    
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'js/app/menu/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: '/inicio',
      views:{
          'content':{
              templateUrl: 'js/app/inicio/inicio.html'   
          }   
      }
  })
  
    .state('app.acerca', {
    url: '/acerca',
      views:{
          'content':{
              templateUrl: 'js/app/acerca/acerca.html'
              
          }
          
      }

  })
  
  .state('app.notigestion', {
    url: '/notigestion',
      views:{
          'content':{
              templateUrl: 'js/app/notigestion/notigestion.html'
              
          }
          
      }

  })
  
  .state('app.notigestion-detail', {
    url: '/notigestion-detail',
      views:{
          'content':{
              templateUrl: 'js/app/notigestion/notigestion-detail.html'
              
          }
          
      }

  })
  
 .state('app.deporte', {
    url: '/deporte',
      views:{
          'content':{
              templateUrl: 'js/app/deporte/deporte.html'
              
          }
          
      }

  })
  
  .state('app.tendencia', {
    url: '/tendencia',
      views:{
          'content':{
              templateUrl: 'js/app/tendencia/tendencia.html'
              
          }
          
      }

  })
  
  .state('app.gastronomia', {
    url: '/gastronomia',
      views:{
          'content':{
              templateUrl: 'js/app/gastronomia/gastronomia.html'
              
          }
          
      }

  })
  
  .state('app.salud', {
    url: '/salud',
      views:{
          'content':{
              templateUrl: 'js/app/salud/salud.html'
              
          }
          
      }

  })
  
  .state('app.amazon', {
    url: '/amazon',
      views:{
          'content':{
              templateUrl: 'js/app/amazon/amazon.html'
              
          }
          
      }

  })
  
   .state('app.politica', {
    url: '/politica',
      views:{
          'content':{
              templateUrl: 'js/app/politica/politica.html'
              
          }
          
      }

  })
  
  // fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
