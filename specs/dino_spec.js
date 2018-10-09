const assert = require('assert')
const Dinosaur = require('../dino.js')

describe('Dinosaur', function(){

  beforeEach(function(){
    dino1 = new Dinosaur('stegosaurus', 'herbivore', 45)
  });

  xit('A species', function(){
      actual = dino1.species
      assert.strictEqual(actual, 'stegosaurus')

  });
  xit('A diet (e.g. carnivore, herbivore or omnivore)', function(){
      actual = dino1.diet
      assert.strictEqual(actual, 'herbivore')

  });
  xit('has an average number of visitors attracted per day', function(){
      actual = dino1.noOfVisitors
      assert.strictEqual(actual, 45)
  });


});
