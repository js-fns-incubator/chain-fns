!function(root) {

  var isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };

  var functions = function(obj) {
    var names = [];
    for (var key in obj) {
      if (isFunction(obj[key])) names.push(key);
    }
    return names;
  };

  var partial = function(func) {
    var boundArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      while (position < arguments.length) {
        args.push(arguments[position++]);
      }
      return func.apply(this, args);
    };
  };

  var wrap = function(func, wrapper) {
    return partial(wrapper, func);
  };

  var chain = function(source) {
    var fns = functions(source);

    var fn = function(object) {
      var wrapper = function () { return object; }

      fns.map(function(f) {
        wrapper[f] = wrap(source[f], function(func) {
          var args = Array.prototype.slice.call(arguments, 1)
          return fn(func.apply(null, [object].concat(args)));
        })
      });

      return wrapper;
    }

    fns.map(function (f) {
      fn[f] = source[f];
    });

    return fn;
  }

  // CommonJS module is defined
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = chain;

    exports.chain = chain;
  }

  root.chain = chain;
}(this);
