function play() {
    var audio = document.getElementById("ridiculous");
    audio.play();
}

angular.module('ridiculous', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
        //initilize the images we will use for the slide show
        $scope.slides = [
            {image: "ridiculous/img1.jpg", description: 'Image 00'},
            {image: "ridiculous/img2.jpg", description: 'Image 01'},
            {image: "ridiculous/img3.jpg", description: 'Image 02'},
            {image: "ridiculous/img4.jpg", description: 'Image 03'},
            {image: "ridiculous/img5.jpg", description: 'Image 04'}
        ];
        //current index is 0, aka begin
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function(index){
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function(index){
            return $scope.currentIndex === index;
        }

        //decriment current slide
        $scope.prevSlide = function(){
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length -1) ? ++$scope.currentIndex : 0;
        };

        //incriment current slide
        $scope.nextSlide = function() {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length -1;
        };


    });
