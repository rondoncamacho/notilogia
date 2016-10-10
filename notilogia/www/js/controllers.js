
.controller('AppCtrl', function($scope, $http) {

  var postsApi = 'http://www.notilogia.com/wp-json/wp/v2/posts?_jsonp=JSON_CALLBACK';

  $http.jsonp( postsApi ).
    success(function(data, status, headers, config) {
      $scope.posts = data;
      console.log( data );
    }).
    error(function(data, status, headers, config) {
      console.log( 'Post load error.' );
    });
  
})

.controller('AppCtrl', function($scope, $stateParams, $sce, $http ) {

  var singlePostApi = 'http://www.notilogia.com/wp-json/wp/v2/posts/' + $stateParams.postId + '?_jsonp=JSON_CALLBACK';

  console.log( $stateParams.postId );

  $http.jsonp( singlePostApi ).
    success(function(data, status, headers, config) {
      $scope.post = data;

      $scope.content = $sce.trustAsHtml(data.content);

      console.log(data);

    }).
    error(function(data, status, headers, config) {
      console.log( 'Single post load error.' );
    });

})
