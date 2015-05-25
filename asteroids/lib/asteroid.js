(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  function Asteroid (hash) {
    hash["color"] = Asteroids.Util.randomColor();
    hash["vel"] = [(Math.random() * 2 -1 ), (Math.random() * 2 - 1)];
    hash["radius"] = 1;
    Asteroids.movingObject.call(this, hash);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);


})();
