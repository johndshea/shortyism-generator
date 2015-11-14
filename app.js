// Basically, this simple Angular controller pulls at random from an array of
// "Shortyisms" every time the moar_shorty function is called via button click,
// and sets $scope.shortyism to the string that is pulled. It also removes that
// particular shortyism from the array of shortyisms and stores it in a second
// array. If the controller detects that the original shortyism is empty, it
// refills it from the array of previously used shortyisms. This minimizes the
// repetition of "shortyisms" while still allowing the button to be pushed
// indefinitely.

var app = angular.module('shortyism_generator', []);

app.controller('cant_control_shorty', function($scope) {
    // Default value before a shortyism is called.
    $scope.shortyism = "Click Below for Pearls of Techy Wisdom";
    $scope.moar_shorty = function() {
      // if the array of shortyisms is emtpy, refill it.
      if (shortyisms_A.length === 0) {
        shortyisms_A = shortyisms_B;
        shortyisms_B = [];
      }
      select = Math.floor(Math.random()*shortyisms_A.length);
      $scope.shortyism = shortyisms_A[select];
      // store the now-used shortyism in another array, and remove it so it
      // doesn't repeat
      shortyisms_B.push(shortyisms_A[select]);
      shortyisms_A.splice(select, 1);
    };
});
