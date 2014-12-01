# Chain-fns

Library of one function which helps you chain your functions.

Example:

``` js
FUNCIONS = {
  add: function(a, b) {
    return a + b;
  },
  square: function(x) {
    return x * x;
  }
}

f = chain(FUNCIONS)
```

Now you can `f` has all functions from `MY_FUNCIONS` and also you can use chaining:

``` js
f.add(1,1) // => 2

f(1).add(1).square()() // => 4
```
Last couple of parentheses needed to call the wrapper function which returns final value.

## Underscore.js or Lo-Dash

Lo-Dash and Underscore.js has chaining mechanism:

``` js
_.chain([1,2,3]).map(function(x) { return x * x}).tail().value() // => [4,9]
```

If you want to make it a little bit shorter, just assign `_.chain` to some variable:

``` js
f = _.chain
f([1,2,3]).map(function(x) { return x * x}).tail().value() // => [4,9]
```

But if you like the way how it's done here, with function wrapper, try this:

``` js
f = chain(_)
f([1,2,3]).map(function(x) { return x * x}).tail()() // => [4,9]
```
