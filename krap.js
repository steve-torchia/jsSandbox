
var animalNames = ['Sheep', 'donkey', 'berd'];

function AnimalMaker(name){
    return{
        speak: function(){
            console.log("my name is " + name);
        }
    }
}

var animals = [];

animalNames.forEach(function(name){
    var n =  AnimalMaker(name);
    animals.push(n);
})

animals.forEach(function(r){
    r.speak();
});


var box = {"innerbox": {"full": true}};


function doeeet(mixture){
    var veggie = "corn";
    var meat = "ham";
    
    return function inner(){
        console.log ("inner: veggie=" + veggie + " meat = " + meat );
    } 

}

var closureAlert = function(){
    var  x = 0;
    return function(){
        console.log("x="+ x);
        x++;
    }
}

var c1= closureAlert();
var c2= closureAlert();

var add = function(num){
    var tmp = num;
    return function foo(num2) {
        return tmp + num2;
    }
}

var add4 = add(4);
var answer = add4(9);
answer = add4(2);


// closure function in an object
function counter(){
    var n = 0;
    return {
        count: function() { return ++n;},
        reset: function() { n = 0;}
        };
    };

var ct = new counter();
ct.count();
ct.count();
console.log(ct.count());
ct.reset();
console.log(ct.count());

var sayAlice  = function (){
    
    var makeLog = function(){
        console.log(alice);
    };
    
    var alice = 'hello alice';
    
    return makeLog;
}

var what = sayAlice();
what();