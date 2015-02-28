angular.module("firebasePractice").controller("mainCtrl", function($scope, mainService){
	
	var sync = mainService.getFriends();
	$scope.friends = sync.$asArray();

	$scope.addFriend = function(newFriend) {
		newFriend.status = "cool";
		$scope.friends.$add(newFriend);
		$scope.newFriend = '';
	}

	$scope.makeLame = function(friend) {
		friend.status = "lame";
		$scope.friends.$save(friend);
	}

	$scope.removeFriend = function(friend){
		$scope.friends.$remove(friend);
	}
})