(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  function movingObject (hash) {
    this.pos = hash.pos;
    this.vel = hash.vel;
    this.radius = hash.radius;
    this.color = hash.color;
  }

  movingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.pi,
      false
    );

    ctx.fill();
  };

  movingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };
})();
