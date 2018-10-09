const assert = require('assert')
const Park = require('../park.js')
const Dinosaur = require('../dino.js')

describe('Park', function(){

  beforeEach(function(){
    park1 = new Park('Attenborough Park', 20)
    dino1 = new Dinosaur('stegosaurus', 'herbivore', 45)
    dino2 = new Dinosaur('T-Rex', 'Carnivore', 100)
    dino3 = new Dinosaur('T-Rex', 'Carnivore', 60)
  });

  xit('Has as name', function(){
      actual = park1.name
      assert.strictEqual(actual, 'Attenborough Park')

  });
  xit('An entry cost', function(){
      actual = park1.entryCost
      assert.strictEqual(actual, 20)

  });

  xit('Add a dinosaur to its collection of dinosaurs', function(){
      park1.addDinosaur(dino1)
      actual = park1.dinosaurs[0].species
      assert.strictEqual(actual, 'stegosaurus')

  });
  xit('Remove a dinosaur from its collection of dinosaurs', function(){
    park1.addDinosaur(dino1)
    park1.removeDinosaur()
    actual = park1.dinosaurs.length
    assert.strictEqual(actual, 0)

  });
  xit('Find the dinosaur that attracts the most visitors', function(){
    park1.addDinosaur(dino1)
    park1.addDinosaur(dino2)
    favDino = park1.findByAtrraction(park1.dinosaurs)
    actual = favDino.species
    assert.strictEqual(actual, 'T-Rex')

  });

  xit('Find all dinosaurs of a particular species', function(){
      park1.addDinosaur(dino1)
      park1.addDinosaur(dino2)
      park1.addDinosaur(dino3)
      actual = park1.findBySpecies('T-Rex')
      assert.deepStrictEqual(actual, [dino2,dino3])

  });
  xit('Calculate the total number of visitors per day', function(){
    park1.addDinosaur(dino1)
    park1.addDinosaur(dino2)
    park1.addDinosaur(dino3)
    actual = park1.totalVistorsByDay()
    assert.strictEqual(actual, 205)

  });

  xit('Calculate the total number of visitors per year', function(){
    park1.addDinosaur(dino1)
    park1.addDinosaur(dino2)
    park1.addDinosaur(dino3)
    actual = park1.totalVisitorByYear()
    assert.strictEqual(actual, 74825)

  });
  xit('Calculate the total revenue from ticket sales for one year', function(){
    park1.addDinosaur(dino1)
    park1.addDinosaur(dino2)
    park1.addDinosaur(dino3)
    actual = park1.totalRevenuePerYear()
    assert.strictEqual(actual, 1496500)

  });
  it('Remove all dinosaurs of a particular species', function(){
    park1.addDinosaur(dino1)
    park1.addDinosaur(dino2)
    park1.addDinosaur(dino3)

    actual = park1.removeSpecies('T-Rex')
    assert.deepStrictEqual(actual, [dino1])
  });
});
