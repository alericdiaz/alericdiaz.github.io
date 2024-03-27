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

    function createEnemy (x, y){
      var enemy = game.createGameItem("enemy", 25);//creates variable called enemy, creates game item "enemy"
      var redSquare = draw.bitmap('img/soap.png');//variable that draws enemy
      redSquare.x = -50;//sets x value in relation to hit zone
      redSquare.y = -35;//sets y value in relation to hit zone
      enemy.addChild(redSquare);//adds redSquare as child of enemy
      enemy.x = x;//sets enemy x value
      enemy.y = y;//sets enemy y value
      game.addGameItem(enemy);//adds enemy as gameItem of game
      enemy.velocityX = -3;//moves enemy left
      enemy.rotationalVelocity = 0;//rotates the enemy
      redSquare.scaleX = 0.1;//sets the scale of enemy x
      redSquare.scaleY = 0.1;//sets the scale of enemy y
  
      enemy.onPlayerCollision = function () {//function that runs when the player collides with an enemy
        game.changeIntegrity(-10)//removes health from player
      };
      enemy.onProjectileCollision = function (){//function that runs when a projectile collides with an enemy
        game.increaseScore(100); //adds a value to the game score
        enemy.fadeOut();
        //enemy.shrink();
        //enemy.flyTo(0, 0);
      }
    }

    function createReward (x, y){
      var reward = game.createGameItem("enemy", 25);//creates variable called reward, creates game item "enemy"
      var blueSquare = draw.rect(50, 50, "blue");//variable that draws reward
      blueSquare.x = -25;//sets x value in relation to hit zone
      blueSquare.y = -25;//sets y value in relation to hit zone
     reward.addChild(blueSquare);//adds blueSquare as child of reward
     reward.x = x;//sets reward x value
     reward.y = y;//sets reward y value
      game.addGameItem(reward);//adds reward as gameItem of game
     reward.velocityX = -3;//moves reward left
     reward.rotationalVelocity = 0;//rotates the reward
  
     reward.onPlayerCollision = function () {//function that runs when the player collides with a reward
        game.changeIntegrity(10)//adds health to player
        reward.shrink();//shrinks the reward
      };
     reward.onProjectileCollision = function (){//function that runs when a projectile collides with a reward
        //game.increasedScore(100); //adds a value to the game score
        //reward.fadeOut();
       //reward.shrink();
        //reward.flyTo(0, 0);
      }
    }

    function createMarker (x, y){
      var marker = game.createGameItem("enemy", 25);//creates variable called marker, creates game item "enemy"
      var yellowSquare = draw.rect(50, 50, "yellow");//variable that draws marker
      yellowSquare.x = -25;//sets x value in relation to hit zone
      yellowSquare.y = -25;//sets y value in relation to hit zone
     marker.addChild(yellowSquare);//adds yellowSquare as child of marker
     marker.x = x;//sets marker x value
     marker.y = y;//sets marker y value
      game.addGameItem(marker);//adds marker as gameItem of game
     marker.velocityX = -3;//moves marker left
     marker.rotationalVelocity = 0;//rotates the marker
  
     marker.onPlayerCollision = function () {//function that runs when the player collides with a marker
        game.changeIntegrity(10)//adds health to player
        startLevel();//calls startLevel function
        marker.flyTo(0, 0);
      };
    }

    //Function calls
    //createSawBlade(500, groundY - 120);//calls createSawBlade function
    //createSawBlade(1000, groundY - 120);//calls createSawBlade function
    //createSawBlade(1500, groundY - 120);//calls createSawBlade function
    //createEnemy(800, groundY - 50);//calls createEnemy function
    //createEnemy(13000, groundY - 50);//calls createEnemy function
    //createReward(2000, groundY - 100);//calls createReward function
    //createMarker(2500, groundY - 100);//calls createMarker function





    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems
      for (var i = 0; i < levelObjects.length; i++){
        var item = levelObjects[i];
        if (item.type === "sawblade"){
          createSawBlade(item.x, item.y);
        }
        if (item.type === "enemy"){
          createEnemy(item.x, item.y);
        }
        if (item.type === "reward"){
          createReward(item.x, item.y);
        }
        if (item.type === "marker"){
          createMarker(item.x, item.y);
        }
      }


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
