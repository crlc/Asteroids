(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, canvasEl) {
    this.game = new Asteroids.Game();
    this.ctx = canvasEl.getContext("2d");
    this.ship = this.game.addShip();
    this.timerId = null;
  };

  GameView.prototype.start = function () {
    window.setInterval((function () {
      console.log(this.ctx);
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);

    this.bindKeyHandlers();
  };

  GameView.MOVES = {
    "w": [ 0, -1],
    "a": [-1,  0],
    "s": [ 0,  1],
    "d": [ 1,  0],
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.ship;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { ship.power(move); });
    });

    key("space", function () { ship.fireBullet(); });
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
