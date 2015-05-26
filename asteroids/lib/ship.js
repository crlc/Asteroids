(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  Asteroids.Ship = function (hash) {
    hash["radius"] = 10;
    hash["color"] = Asteroids.Util.randomColor();
    hash["vel"] = [0, 0];
    Asteroids.MovingObject.call(this, hash);
  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.relocate = function(position){
    this.pos = position;
    this.vel = [0,0];
  };

  Asteroids.Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

})();
