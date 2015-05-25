(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  if (typeof Asteroids.Util === "undefined") {
    var Util = Asteroids.Util = {};
  }

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };
})();
