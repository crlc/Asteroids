(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.color = Asteroids.Util.randomColor();
    options.vel = [(Math.random() * 2 -1 ) * 2, (Math.random() * 2 - 1) * 2];
    options.radius = 20;
    Asteroids.MovingObject.call(this, options);
  };

  Asteroids.Util.inherits(Asteroids, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };
})();
