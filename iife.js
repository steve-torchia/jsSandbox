//require('.//car.js');



// IIFE
(function(){
  console.log("fu");
})();

var app ={};
var jQuery = {};
(function(namespace, $, undefined){
  namespace.name = 'none';
  console.log($ === jQuery);
  console.log(undefined);
})(app, jQuery);


console.log(app.name);