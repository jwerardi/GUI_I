var app = angular.module('memeNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = "hello fuck";
        $scope.posts = [
            {title: 'post one', upvotes: 5},
            {title: 'post two', upvotes: 52},
            {title: 'post three', upvotes: 15},
            {title: 'post four', upvotes: 65},
            {title: 'post five', upvotes: 444445},
        ];
        $scope.addPost = function(){
            //doesn't allow blank titles
            if(!$scope.title || $scope.title === '') { return; }
            //adds new post with user submitted title, starting at zero upvotes
            $scope.posts.push({title: $scope.title, upvotes: 0});
            $scope.title = '';
        };
        $scope.addUpvote = function(post){
            post.upvotes += 1;
            $scope.isDisabled = true;
        }
        $scope.addDownvote = function(post){
            post.upvotes -= 1;
            $scope.isDisabled = true;
        }

    }]);