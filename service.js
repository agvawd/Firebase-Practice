angular.module("firebasePractice").service("mainService", function($firebase){
	var firebaseUrl = "https://create-app.firebaseio.com/";

	this.getFriends = function() {
		return $firebase(new Firebase(firebaseUrl + "friends"));
	}
})