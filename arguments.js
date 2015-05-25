var sum = function () {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  args.forEach(function (i) { sum += i });

  return sum;
};

console.log(sum(1,2,3,4));

Function.prototype.myBind = function () {
  var fn = this;
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift();

  return function () {
    var newArgs = [].slice.call(arguments);
    fn.apply(context, args.concat(newArgs));
  }
};


function Cat(name) {
  this.name = name;
}


var breakfast = new Cat("Breakfast");
var markov = new Cat("Markov");

Cat.prototype.meow = function(sound) {
  console.log(this.name + " " + sound);
}

breakfast.meow("meow");
breakfast.meow.myBind(markov)("meow");

function curriedSum(numArgs){
  var numbers = [];
  function _curriedSum(num){
    numbers.push(num);
    if (numbers.length >= numArgs) {
      var sum = 0;
      numbers.forEach( function(i) { sum += i } );
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  var fn = this;
  var numbers = [];

  function _curry(num){
    numbers.push(num);
    if (numbers.length >= numArgs) {
      return fn.apply(fn, numbers);
    } else {
      return _curry;
    }
  }
  return _curry;
}

console.log(sum.curry(4)(5)(30)(20)(1));
