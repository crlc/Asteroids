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
    this.NUM_ASTEROIDS = 2;
    this.asteroidList = [];
    var options = { pos : this.randomPosition(), game : this };

    this.ship = new Asteroids.Ship(options);

    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      this.addAsteroids();
    }
  };
  Game.prototype.addAsteroids = function() {
    var options = { pos : this.randomPosition(), game : this };
    var newAsteroid = new Asteroids.Asteroid(options);
    this.asteroidList.push(newAsteroid);
  };

  Game.prototype.randomPosition = function() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach( function(el) { el.draw(ctx); });
  };

  Game.prototype.wrap = function (asteroid) {
    if (asteroid.pos[0] >= this.DIM_X) {
      asteroid.pos[0] -= this.DIM_X;
    } else if (asteroid.pos[0] < 0) {
      asteroid.pos[0] += this.DIM_X;
    }
    if (asteroid.pos[1] >= this.DIM_Y) {
      asteroid.pos[1] -= this.DIM_Y;
    } else if (asteroid.pos[1] < 0) {
      asteroid.pos[1] += this.DIM_Y;
    }
    return asteroid;
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach( function (el) {el.move(); });
  };

  Game.prototype.checkCollisions = function(){
    // var somethingCollided = false;
    for (var i = 0; i < this.allObjects().length; i++){
      for (var j = i+1; j < this.allObjects().length; j++){
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])){
          // this.allObjects()[i].vel[0] *= -1;
          // this.allObjects()[i].vel[1] *= -1;
          // this.allObjects()[j].vel[0] *= -1;
          // this.allObjects()[j].vel[1] *= -1;
          // this.remove(i);
          // this.remove(j-1);
          // somethingCollided = true;
          // break;
        }
      }
      // if (somethingCollided){
      //   break;
      // }
    }
    // if (somethingCollided){
    //   this.checkCollisions();
    // }
  };

  Game.prototype.remove = function (index) {
    this.asteroidList.splice(index, 1);
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.allObjects = function(){
    return this.asteroidList.concat(this.ship);
  };

})();
