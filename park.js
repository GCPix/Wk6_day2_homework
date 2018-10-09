const Park = function(name, entryCost){
  this.name = name
  this.entryCost = entryCost
  this.dinosaurs = []
};

Park.prototype.addDinosaur = function (dino) {
    this.dinosaurs.push(dino);
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurs.pop();
};

Park.prototype.findByAtrraction = function(dinosaurs){
  let highest = this.dinosaurs[0]
  for (let dino of dinosaurs){
    if(dino.noOfVisitors > highest.noOfVisitors){
      highest = dino
      };
    };

  return highest
};

Park.prototype.findBySpecies = function (species) {
  const species_array = []
  for (let dino of this.dinosaurs){
    if(dino.species === species){
      species_array.push(dino)

    };
  };
  return species_array
};

Park.prototype.totalVistorsByDay = function () {
  let total = 0
  for (let dino of this.dinosaurs){
    total = total += dino.noOfVisitors
  };
  return total
};

Park.prototype.totalVisitorByYear = function () {
  return this.totalVistorsByDay()*365;

};

Park.prototype.totalRevenuePerYear = function () {
  return this.totalVisitorByYear()*this.entryCost
};

Park.prototype.removeSpecies = function(speciesRemove){
  let species_array = []
  species_array = this.findBySpecies(speciesRemove);

  //I think i use splice to to compare the array above to the this.dinosaurs one but  no amount of looping is working

  //found this version.  It is the reverse of what I had tried
  //its like a for loop in a for loop filter and find work there way through each item in the array so for each dino in dinosaurs compare it to each item in species_array aka saObject as they are nested it returns false when the item in dinosaurs isn't in species_array so we need to reverse it hence!

      this.dinosaurs = this.dinosaurs.filter(function(dino) {//filter technically creates a new array but I am using it to update the original array
        return !species_array.find(function(saObject) {//needed the ! because we need to reverse the returned value from find.
          return dino.species===saObject.species//returns true wherever condition met
        });
      });
      return this.dinosaurs
    };


module.exports = Park
