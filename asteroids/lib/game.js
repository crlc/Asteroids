(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  if (typeof Asteroids.Game === 'undefined'){
    Asteroids.Game = {};
  }
var Game = Asteroids.Game = function(){
  this.DIM_X = 400;
  this.DIM_Y = 400;
  this.NUM_ASTEROIDS = 1000;
  this.asteroidList = [];
};
  Game.prototype.addAsteroids = function() {
    var pos = { pos : Game.randomPosition() };
    var newAsteroid = new Asteroids.Asteroid(pos);
    this.asteroidList.push(newAsteroid);
  };

  Game.prototype.randomPosition = function() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    this.asteroidList.forEach( function(i) { i.draw(ctx); });
  };

  Game.prototype.movingObjects = function() {
    this.asteroidList.forEach( function(i) { i.move(); });
  };



})();
