class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.boss = this;


  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
     let numberOfVampires = 0;
     let currentVampire = this;

     while (currentVampire.boss){
       currentVampire = currentVampire.boss;
       numberOfVampires++;
     }
     return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let offspring = []; // 1

    if (this.offspring > vampire) {
      offspring.push(this); // 2
    }

    for (const offspring of this.offspring) {
      const offspringMoreSenior = offspring.offspringMoreSenior(vampire); // 3
      offspring = offspring.concat(offspringMoreSenior);
    }

    return employees;

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}


module.exports = Vampire;

