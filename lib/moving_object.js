(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.collideWith = function (otherObject) {};

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject){
    var distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]),2 ) +
                  Math.pow((this.pos[1] - otherObject.pos[1]),2));
    if (this.radius + otherObject.radius >= distance){
      return true;
    }
    return false;
  };

  MovingObject.prototype.remove = function () {
    this.game.remove(this);
  };
})();
