// console.log("hello");
var SolarSystem = (function(){
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var numPlanetsPeopleLandedOn = 0;

  var dwarfPlanets = "Pluto";
  var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
  var age = 0;

  return {
    getPlanets : function(){
      return planets;
    },
    getPlanetsLandedPeopleOn : function(){
      return numPlanetsPeopleLandedOn;
    },
    setPlanetsLandedPeopleOn : function(){
      numPlanetsPeopleLandedOn++;
    },

    getDwarfPlanets : function(){
      return "They are Rejects";
    },
    setDwarfPlanets : function(lumpOfRock){
      dwarfPlanets.push(lumpOfRock);
    },
    getStars : function(){
      return stars;
    },
    setStars : function(newStar){
      stars.push(newStar);
    },
    getSolarSystemAge : function(){
      return age;
    },
    setSolarSystemAge : function(){
      age++;
    }
  }

})();

// console.log("Planets: ", SolarSystem.getPlanets());
//
// console.log("Planets w/ people: ", SolarSystem.getPlanetsLandedPeopleOn());
//
// SolarSystem.setSpaceShips("ship 1");
// SolarSystem.setSpaceShips("ship 2");
// SolarSystem.setSpaceShips("ship 3");
