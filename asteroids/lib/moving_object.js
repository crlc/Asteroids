(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.MovingObject = function (hash) {
    this.pos = hash.pos;
    this.vel = hash.vel;
    this.radius = hash.radius;
    this.color = hash.color;
    this.game = hash.game;
  };

  Asteroids.MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  Asteroids.MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this);
  };

  Asteroids.MovingObject.prototype.isCollidedWith = function (otherObject){
    var distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]),2 ) +
                  Math.pow((this.pos[1] - otherObject.pos[1]),2));
    if (this.radius + otherObject.radius >= distance){
      return true;
    }
    return false;
  };
})();
