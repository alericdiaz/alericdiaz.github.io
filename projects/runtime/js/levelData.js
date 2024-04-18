var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 500, y: groundY - 120, image: 'img/brush.png', moveX: -25, moveY: -25, rotationalVelocity: 3, hitZone: 25, damage: 10, scale: 0.05  },
          { type: "enemy", x: 800, y: groundY - 50, image: 'img/soap.png', moveX: -50, moveY: -35, velocity: -3, scaleX: 0.1, scaleY: 0.1, damage: -10, score: 50 },
          { type: "obstacle", x: 1000, y: groundY - 120, image: 'img/brush.png', moveX: -25, moveY: -25, rotationalVelocity: 3, hitZone: 25, damage: 10, scale: 0.05 },
          { type: "enemy", x: 1300, y: groundY - 50, image: 'img/soap.png', moveX: -50, moveY: -35, velocity: -3, scaleX: 0.1, scaleY: 0.1, damage: -10, score: 50 },
          { type: "obstacle", x: 1500, y: groundY - 120, image: 'img/brush.png', moveX: -25, moveY: -25, rotationalVelocity: 3, hitZone: 25, damage: 10, scale: 0.05 },
          { type: "reward", x: 2000, y: groundY - 100, image: 'img/baggedTrash.png', moveX: -25, moveY: -40, velocity: -3, scaleX: 0.1, scaleY: 0.1, score: 100, health: 10 },
          { type: "marker", x: 2500, y: groundY - 100, image: 'img/fly.png', scale: 0.05, moveX: -25, moveY: -25, health: 10 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 500, y: groundY, image: 'img/sponge.png', moveX: -25, moveY: -25, rotationalVelocity: 0, hitZone: 25, damage: 20, scale: 0.05 },
          { type: "enemy", x: 750, y: groundY - 50, image: 'img/soap.png', moveX: -50, moveY: -35, velocity: -3, scaleX: 0.1, scaleY: 0.1, damage: -10, score: 50 },
          { type: "obstacle", x: 1000, y: groundY, image: 'img/sponge.png', moveX: -25, moveY: -25, rotationalVelocity: 0, hitZone: 25, damage: 20, scale: 0.05 },
          { type: "reward", x: 1250, y: groundY - 100, image: 'img/baggedTrash.png', moveX: -25, moveY: -40, velocity: 0, scaleX: 0.1, scaleY: 0.1, score: 100, health: 10 },
          { type: "obstacle", x: 1500, y: groundY, image: 'img/sponge.png', moveX: -25, moveY: -25, rotationalVelocity: 0, hitZone: 25, damage: 20, scale: 0.05 },
          { type: "enemy", x: 1750, y: groundY - 50, image: 'img/soap.png', moveX: -50, moveY: -35, velocity: -2.5, scaleX: 0.1, scaleY: 0.1, damage: -10, score: 50 },
          { type: "enemy", x: 2100, y: groundY - 50, image: 'img/soap.png', moveX: -50, moveY: -35, velocity: -2, scaleX: 0.1, scaleY: 0.1, damage: -10, score: 50 },
          { type: "obstacle", x: 2300, y: groundY, image: 'img/sponge.png', moveX: -25, moveY: -25, rotationalVelocity: 0, hitZone: 25, damage: 20, scale: 0.05 },
          { type: "enemy", x: 2500, y: groundY - 50, image: 'img/soapman.png', moveX: -50, moveY: -35, velocity: -1.75, scaleX: 0.1, scaleY: 0.1, damage: -1000, score: 500 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
