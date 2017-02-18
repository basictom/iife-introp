// var outside = "global";
//
// function scopeStuff(){
//   var inside = "local";
//   console.log('outside from inside the function', outside);
//   console.log('inside from outside the function', inside);
// }
// console.log('outside from inside the function', outside);
// console.log('inside from outside the function', inside);
//
// scopeStuff();

var global_base = 500;
(function throwAway(){
  global_base += 500;
  console.log(global_base);
})();

var books = (function(){
  var type = "paper";
  var cover = "hard";
  return {
    getType : function(){
      return type;
    },
    getCover : function(){
      return cover;
    },
    setType : function(newType){
      type = newType;
    }
  };
})();

console.log(books.getType());



// throwAway();

// document.getElementById().addEventListener("click",throwAway)
