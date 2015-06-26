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
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomColor = function(){
    var HEX_DIGITS = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
     color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
 };


})();
