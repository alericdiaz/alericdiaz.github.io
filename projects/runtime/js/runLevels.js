var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;//variable that creates the size of the hit zone
    var damageFromObstacle = 10;//variable that decides the damage of the obstacle
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//uses createObstacle function and creates hit zone size and damage
    sawBladeHitZone.x = 400;//sets the x value of the sawBladeHitZone
    sawBladeHitZone.y = groundY - 120;//sets the y value of the sawBladeHitZone
    game.addGameItem(sawBladeHitZone);//adds sawBladeHitZone as game item of game
    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
