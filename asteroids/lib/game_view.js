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
    window.setInterval((function(){
      console.log(this.ctx);
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);

  };

  GameView.prototype.bindKeyHandlers(){
    key('w', this.game.ship.power([-1,0]));
    key('s', this.game.ship.power([1,0]));
    key('a', this.game.ship.power([0,-1]));
    key('d', this.game.ship.power([0,1]));

  }
})();
