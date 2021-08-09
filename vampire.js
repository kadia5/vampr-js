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
    vampire.creator = this;

// console.log( vampire.creator)
// console.log( offspring.creator)
// console.log( vampire.name)

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
     let numberOfVampires = 0;
     let currentVampire = this;

     while (currentVampire.creator){
       currentVampire = currentVampire.creator;
       numberOfVampires++;
     }
     return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    //if this.yearConverted of 1 vamp is > another vampire 
    //if theyre a creator vampire
    // if (vampire.creator > vampire.offspring || vampire.creator) {
    //   return true;

    //   } else if (vampire.offspring <= vampire.offspring) {
    //     return false;

    //   }
    return (this.numberOfOffspring >= vampire.numberOfOffspring);
        
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  //how to access root vamp
//   findFirstVamp() {
//     let currentVamp = this;
//     if (currentVamp.creator) {
//       currentVamp = currentVamp.creator;
//       //recursive line is below
//       return currentVamp.findFirstVamp()
//   } else {
//     //stop condition below
//     return currentVamp;
//   }
  
// }

  vampireWithName(name) {
      // console.log(this); 
      function findName(vampire, name){
        // console.log(vampire)
        if (vampire && vampire.name === name){
          return vampire;
        }
        if(vampire.offspring.length === 0){
          // console.log("here we go")
          return null;
        
        }
        //child = the entire object within the offspring arr, called vampire/all its info
        for (let child of vampire.offspring) {
          // console.log("this is child");
          // console.log(child)
          // console.log(name)
          //recursion line 89
          let childVamp = findName(child, name);
          // console.log("this is a string")
          // console.log(childVamp)
          if (childVamp) {
            return childVamp
          } else {
            continue;
          }
        
        }
        return null;
      }
     
     let result = findName(this, name);
     console.log(result)
     return result
      
  }
  

  // Returns the total number of vampires that exist
  //when theres a get funct, no need to put ()
  get totalDescendents() {
    let descendents = 0;
    
    //counts for current vamp + offsprings in for loop
    //loops only hen vamp has offsprings, else wont loop
      for (let child of this.offspring) {
        // recursion is line below, calling method again on 1st descendant counted
        //the counts theirs
        descendents += 1 + child.totalDescendents
         
       
    }
    return descendents; 
  }


  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let allMillennialVampires = []; 

    if (this.yearConverted > 1980) {
      allMillennialVampires.push(this); 
    }

    for (const child of this.offspring) {
      allMillennialVampires.concat(child.allMillennialVampires) 
    }

    return allMillennialVampires;
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
//   closestCommonAncestor(vampire) {

//   }
}


module.exports = Vampire;

