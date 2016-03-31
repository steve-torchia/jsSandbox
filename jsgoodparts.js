// var x = identifyf(3);
// console.log(x());
function add(x, y){
    return x + y;
}

function mul(x, y){
    return x * y;
}


function addf(x){
   return function(y){
       return x + y;
   };
}

function applyf(f){
    return function (x){
        return function (y){
            return f(x, y);
        }
    }
}

function curry(f, first){
    return function (second){
        return f(first, second);
    }
}
function curry2(f, first){
    return applyf(f)(first);
}

// three ways to create the inc() function:  inc(5)=6, inc(inc(5))=7

var inc1 = addf(1);
var inc2 = applyf(add)(1);
var inc3 = curry(add, 1);

// write methodize, a function that converts a binary function to a methodize
/*
Number.prototype.add = methodize(add);
(3).add(4) = 7
kinda like an extension method?
*/
function methodize(func){
    return function (y){
        return func(this, y);
    }
}
Number.prototype.add = methodize(add);
var z=(4).add(4); //8



// Write a function composeu that takes two unary functions and returns a unary function that calls them both
/*
composeu(double, square)(3) //36
*/
function composeu(f, g){
    return function (a) {
        return g(f(a));
    }
}
//var comp1 = composeu(double, square)(3);  //36

// write a function that allows another function to be only called once
/*
add_once = once(add);
add_once(3,4) //7
add_once(3,4) //throw!
*/
function onceWrapper(func){
    return function (){
        var f = func;
        func = null;
        return f.apply(
            this,
            arguments
        );
    }
}
function onceWrapper2(func){
    var ret;
    return function (){
        ret= func.apply(
            this,
            arguments
        );
        func = null;
        return ret;
    }
}
add_once = onceWrapper2(add);
var ao1 = add_once(3,4);
var ao2 = add_once(3,4);


var c1 = curry(add, 4)(9);
var c2 = curry2(add, 4)(9);

var poop = applyf(mul)(5)(9);

var ans1 = addf(3);
var ans2 = ans1(8);
console.log(ans2);
console.log(addf(3)(2));

ff = addf(3)(4);
console.log(ff);