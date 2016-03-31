var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

function dooiit(word){
    console.log(word);
}

var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...
  
  return function () {
    return secureCode;
  };
})();

function myConcat(separator) {
   var result = "", // initialize list
       i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");

console.log(pet.getSex());                   // male
console.log(pet.getName());                  // Oliver

console.log(dooiit("stupid"));

console.log(getCode());

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

// freezes the entire app/browser..uses as much cpu as it needs
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var s = new String("foo"); // Creates a String object
console.log(s); // Displays: { '0': 'f', '1': 'o', '2': 'o'}
console.log(typeof s); // Returns 'object'

function swap(a,b){
    var tmp = a;
    a = b;
    b=tmp;
    return a;
}
var x =1, y =2;
ans = swap(x,y);
console.log(ans);

function identifyf(arg){
    return function(){
        return arg;
    }
}

// var x = identifyf(3);
// console.log(x());

function addf(X){
   return function(y){
       return x + y;
   }
}

//var ans1 = addf(3);
//var ans2 = ans1(8);
//console.log(ans2);
//console.log(addf(3)(2));

ff = addf(3)(4);
console.log(ff);

