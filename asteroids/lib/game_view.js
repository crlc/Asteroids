(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  if (typeof Asteroids.GameView === "undefined"){
    Asteroids.GameView = function(){};
  }
  var GameView = Asteroids.GameView = function(canvasEl){
    this.game = new Asteroids.Game();
    this.ctx = canvasEl.getContext("2d");
  };

  GameView.prototype.start = function(){
    setInterval(this.game.moveObjects, 20);
    setInterval(this.game.draw, 20);

  }
})();
