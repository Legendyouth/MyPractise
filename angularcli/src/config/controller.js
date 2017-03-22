angular.module('mapp')
	.controller('guideCtrl',guideCtrl);
guideCtrl.$injector = ['$scope'];
function guideCtrl($scope)
{
	new Swiper('#guideSwiper-container');
}