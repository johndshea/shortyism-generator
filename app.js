/*jshint multistr: true */

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

// array to store "used" shortyisms
var shortyisms_B = [];

var shortyisms_A = [

  "I covet other people's fancy pants.  I really love seeing people wearing \
  really nice weird pants.  Not like khaki, or chinos, but like those people \
  who get custom made pants and they're super unique.  I lose my lid on that \
  shit!  I think that's great.  I think finally I'm going to to get some \
  custom pants made so I maybe I won't have to covet anymore.",

  "Dance, Satan, dance!",

  "Stanley’s like you modafocka!",

  "Grass tastes terrible.",

  "It’s filthy. It’s dirty. It’s SO GOOD.",

  "damn you, autocomplete",

  "Welcome, sinners. Please sign up to lift your burdens",

  "Patch, put, and delete are lies!",

  "Now you guys did $http? I'm going to insist that you call it 'shitty pee'. \
  Dennis has been hiding ducks in the room.",

  "I’m not here today.  Lord James is sick, and demands attention.",

  "maybe jesus. gravy jesus. shady jesus. but does baby jesus love digital \
  photography over film? quick, debate.",

  "SPEAK NOW OR FOREVER HOLD YOUR PIZZA",

  "Bring it up. Yeah, please. You can see my browser history: \
  www.terriblepornography.com",

  "DangSON!!!",

  "Let's give this div a black background on hover, and not have it change \
  back when you mouse away. Because once you go black...",

  "Neerp, neerp, neerp.",

  "Yuppers McYuppers.  I know that one, too.",

  "SHORTY: So the idea is we're doing one-on-ones on Tuesday and Wednesday \
  because you've had all weekend to really hack away at this, so please make \
  sure you do.  I know you are really getting excited about Columbus Day, and \
  you've all probably found a Native American to murder -- \
  STUDENT:  That was totally what I was thinking.\
  SHORTY:  I mean, how else could you celebrate that day correctly?\
  STUDENT:  Native People's day.\
  SHORTY:  Or you could replace it with a better holiday.\
  STUDENT:  Pizza party!",

  "Hey, Gregory Dunn... \
  Crabs to you are forbidden... \
  Finish that lab, first",
  "Brandon is now here... \
  Help flows like running water... \
  Save us from this lab",

  "Oh god, we’ve obviously broken their brains.  I’m so sorry everyone.",

  "'Twatted' is not the correct way to say that.",

  "breathe, clear your mind, take a wide stance, push down in your belly",

  "Damn, a vegetarian came to the BBQ.  Better serve him some impromptofu. \
  Quick to the Urbane Dictionary... Quick, a thousand upvotes for it... \
  There aren't any definitions for impromptofu yet... Can you define it? ... \
  Come on, UD.... faster ... \
  Well, I guess I'll just stay and read about depraved sexual things.",

  "So, am I hung? _...pause..._",

  "Last Thursday, I stared at someone's pants for six hours.",

  "So this is like... ugh. I'm not going to use words. I'm done.",

  "There's going to be children floating around that don't make any sense. \
  Let's kill Joe and make sure that everything he loves and holds dear that \
  makes him a terrible person goes away.",

  "Yesterday I ate three pairs of plaid pants.",

  "I love yelling at trees. Yesterday I tore a birch a new one.",

  "Boop! Boop! Boop! oops... Boop! wait... Boop! It's heavily nested nonsense.",

  "My computer is possessed. Dammit, dancing Satan!"
];
