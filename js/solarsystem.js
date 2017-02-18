// console.log("hello");
var SolarSystem = (function(){



  var dwarfPlanets = "Pluto";



  return {

    getDwarfPlanets : function(){
      return "They are Rejects";
    },
    setDwarfPlanets : function(lumpOfRock){
      dwarfPlanets.push(lumpOfRock);
    },

  }

})();
