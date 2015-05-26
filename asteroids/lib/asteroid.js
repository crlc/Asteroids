(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  Asteroids.Asteroid = function (hash) {
    hash["color"] = Asteroids.Util.randomColor();
    hash["vel"] = [(Math.random() * 2 -1 ) * 2, (Math.random() * 2 - 1) * 2];
    hash["radius"] = 20;
    Asteroids.MovingObject.call(this, hash);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);


})();
