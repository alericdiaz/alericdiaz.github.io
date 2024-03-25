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

    function createSawBlade(x, y){
      var hitZoneSize = 25;//variable that creates the size of the hit zone
      var damageFromObstacle = 10;//variable that decides the damage of the obstacle
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//uses createObstacle function and creates hit zone size and damage
      sawBladeHitZone.x = x;//sets the x value of the sawBladeHitZone
      sawBladeHitZone.y = y;//sets the y value of the sawBladeHitZone
      game.addGameItem(sawBladeHitZone);//adds sawBladeHitZone as gameItem to game
      var obstacleImage = draw.bitmap("img/sawblade.png");//creates a variable that inserts an image of a sawblade
      sawBladeHitZone.addChild(obstacleImage);//adds obstacleImage variable as child of sawBladeHitZone
      obstacleImage.x = -25;//sets x value in relation to hit zone
      obstacleImage.y = -25;//sets y value in relation to hit zone
    }
    createSawBlade(400, groundY - 120);//calls createSawBlade function
    createSawBlade(700, groundY - 120);//calls createSawBlade function
    createSawBlade(900, groundY - 120);//calls createSawBlade function

    var enemy = game.createGameItem("enemy", 25);//creates variable called enemy, creates game item "enemy"
    var redSquare = draw.rect(50, 50, "red");//variable that draws enemy
    redSquare.x = -25;//sets x value in relation to hit zone
    redSquare.y = -25;//sets y value in relation to hit zone
    enemy.addChild(redSquare);//adds redSquare as child of enemy
    enemy.x = 400;//sets enemy x value
    enemy.y = groundY - 50;//sets enemy y value
    game.addGameItem(enemy);//adds enemy as gameItem of game
    enemy.velocityX = -1;//moves enemy left
    enemy.rotationalVelocity = 0;//rotates the enemy

    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10)
    };
    enemy.onProjectileCollision = function (){
      game.increasedScore(100);
      //enemy.fadeOut();
      //enemy.shrink();
      //enemy.flyTo(0, 0);
    }


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
