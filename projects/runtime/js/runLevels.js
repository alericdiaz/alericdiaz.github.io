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

    function createObstacle(x, y, image, moveX, moveY, rotationalVelocity, hitZone, damage, scale){
      var hitZoneSize = hitZone;//variable that creates the size of the hit zone
      var damageFromObstacle = damage;//variable that decides the damage of the obstacle
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//uses createObstacle function and creates hit zone size and damage
      obstacleHitZone.x = x;//sets the x value of the obstacleHitZone
      obstacleHitZone.y = y;//sets the y value of the obstacleHitZone
      game.addGameItem(obstacleHitZone);//adds obstacleHitZone as gameItem to game
      var obstacleImage = draw.bitmap(image);//creates a variable that inserts an image of a sawblade
      obstacleHitZone.addChild(obstacleImage);//adds obstacleImage variable as child of obstacleHitZone
      obstacleImage.x = moveX;//sets x value in relation to hit zone
      obstacleImage.y = moveY;//sets y value in relation to hit zone
      obstacleImage.scaleX = scale;
      obstacleImage.scaleY = scale;
      obstacleHitZone.rotationalVelocity = rotationalVelocity
    }

    function createEnemy (x, y, image, moveX, moveY, velocity, scaleX, scaleY, damage, score){
      var enemy = game.createGameItem("enemy", 25);//creates variable called enemy, creates game item "enemy"
      var redSquare = draw.bitmap(image);//variable that draws enemy
      redSquare.x = moveX;//sets x value in relation to hit zone
      redSquare.y = moveY;//sets y value in relation to hit zone
      enemy.addChild(redSquare);//adds redSquare as child of enemy
      enemy.x = x;//sets enemy x value
      enemy.y = y;//sets enemy y value
      game.addGameItem(enemy);//adds enemy as gameItem of game
      enemy.velocityX = velocity;//moves enemy left
      enemy.rotationalVelocity = 0;//rotates the enemy
      redSquare.scaleX = scaleX;//sets the scale of enemy x
      redSquare.scaleY = scaleY;//sets the scale of enemy y
  
      enemy.onPlayerCollision = function () {//function that runs when the player collides with an enemy
        game.changeIntegrity(damage)//removes health from player
      };
      enemy.onProjectileCollision = function (){//function that runs when a projectile collides with an enemy
        game.increaseScore(score); //adds a value to the game score
        enemy.fadeOut();
        //enemy.shrink();
        //enemy.flyTo(0, 0);
      }
    }

    function createReward (x, y, image, moveX, moveY, velocity, scaleX, scaleY, score, health){
      var reward = game.createGameItem("enemy", 25);//creates variable called reward, creates game item "enemy"
      var blueSquare = draw.bitmap(image);//variable that draws reward
      blueSquare.x = moveX;//sets x value in relation to hit zone
      blueSquare.y = moveY;//sets y value in relation to hit zone
     reward.addChild(blueSquare);//adds blueSquare as child of reward
     reward.x = x;//sets reward x value
     reward.y = y;//sets reward y value
      game.addGameItem(reward);//adds reward as gameItem of game
     reward.velocityX = velocity;//moves reward left
     reward.rotationalVelocity = 0;//rotates the reward
     blueSquare.scaleX = scaleX;//sets the scale of enemy x
      blueSquare.scaleY = scaleY;//sets the scale of enemy y
  
     reward.onPlayerCollision = function () {//function that runs when the player collides with a reward
        game.changeIntegrity(health)//adds health to player
        game.increaseScore(score); //adds a value to the game score
        reward.shrink();//shrinks the reward
      };
     reward.onProjectileCollision = function (){//function that runs when a projectile collides with a reward
        //game.increasedScore(100); //adds a value to the game score
        //reward.fadeOut();
       //reward.shrink();
        //reward.flyTo(0, 0);
      }
    }

    function createMarker (x, y, image, scale, moveX, moveY, health){
      var marker = game.createGameItem("enemy", 25);//creates variable called marker, creates game item "enemy"
      var yellowSquare = draw.bitmap(image);//variable that draws marker
      yellowSquare.x = moveX;//sets x value in relation to hit zone
      yellowSquare.y = moveY;//sets y value in relation to hit zone
     marker.addChild(yellowSquare);//adds yellowSquare as child of marker
     marker.x = x;//sets marker x value
     marker.y = y;//sets marker y value
      game.addGameItem(marker);//adds marker as gameItem of game
     marker.velocityX = -3;//moves marker left
     marker.rotationalVelocity = 0;//rotates the marker
     yellowSquare.scaleX = scale;//sets the scale of enemy x
      yellowSquare.scaleY = scale;//sets the scale of enemy y
  
     marker.onPlayerCollision = function () {//function that runs when the player collides with a marker
        game.changeIntegrity(health)//adds health to player
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
        if (item.type === "obstacle"){
          createObstacle(item.x, item.y, item.image, item.moveX, item.moveY, item.rotationalVelocity, item.hitZone, item.damage, item.scale);
        }
        if (item.type === "enemy"){
          createEnemy(item.x, item.y, item.image, item.moveX, item.moveY, item.velocity, item.scaleX, item.scaleY, item.damage, item.score);
        }
        if (item.type === "reward"){
          createReward(item.x, item.y, item.image, item.moveX, item.moveY, item.velocity, item.scaleX, item.scaleY, item.score, item.health);
        }
        if (item.type === "marker"){
          createMarker(item.x, item.y, item.image, item.scale, item.moveX, item.moveY, item.health);
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
