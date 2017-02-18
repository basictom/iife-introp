var SolarSystem = (function(oldSolarSystem){

  var spaceShips = [];

    oldSolarSystem.getSpaceShips = function(){
      return spaceShips;
    };
    oldSolarSystem.setSpaceShips = function(ship){
      spaceShips.push(ship);
    };
    oldSolarSystem.wreckSpaceShips = function(){
      spaceShips.pop();
    };


  return oldSolarSystem;
})(SolarSystem || {});
