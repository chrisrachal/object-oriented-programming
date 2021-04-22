// Write out factory functions

// function House(bedrooms, bathrooms, garage) {
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.garage = garage;
// }

// // Instance of House
// const jennyHouse = new House(3, 3, true);
// console.log(jennyHouse);

// // add a method on the factory function
// jennyHouse.__proto__.paintHouse = function() {
//     console.log('Jenny paints house');
// }
// // __proto__ allows you to see methods or add methods

// exercise:
// Think of an example of a sport, and come up a factory function that has properties
// add one method to an instance

// function Kobe(points, rebounds, assists, isChamp) {
//     this.points = points;
//     this.rebounds = rebounds;
//     this.assists = assists;
//     this.isChamp = function(boolean) {
//         return boolean;
//     }
//     this.introduction = function() {
//         console.log(`Kobe has ${this.points} points, and ${this.assists} assists.`);
//     }
// }

// const kobeStats = new Kobe(33, 10, 11); //instance of Kobe
// console.log(kobeStats);
// console.log(kobeStats.isChamp(true));

// kobeStats.__proto__.shootBall = function() {
//     console.log('Kobe shoots the ball');
// }

// function iPhone(owner, color, size, memory) {
//     this.owner = owner;
//     this.color = color;
//     this.size = size;
//     this.memory = memory;

//     this.phoneCall = function (phoneNumber) {
//         console.log(`Calling ${phoneNumber} ...`);
//     }
//     this.textMessage = function (contact) {
//         console.log(`Texting ${contact} ...`);
//     }
// }
//  const shawnIphone = newIphone('Shawn', 'black', 'Pro Max', 512);

//  shawnIphone.__proto__.upgradeSoftware = function() {
//      console.log('New software update available');
//  }

//  const jakeIphone = newIphone('Jade', 'gold', 'pro', 512);


 class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return "Hello, my name is " + this.name;
    }
  }
  
  class Student extends Person {
    constructor(name, course) {
      super(name);
      this.course = course;
    }
    /*
    greet() {
      return "Hello, my name is " + this.name;
    }

    */
    doHomework(assignment) {
        console.log(`Deliverable: ${Assignment}`); // temperate literal
    }
  }

  const bob = new Person('Bob');
  const john = new Student('John', 'SEI');
  
  console.log(bob);
  console.log(john);


  class Parent {
      constructor(name, location) {
          this.name = name;
          this.location = location;
      }

      drive(car) {
            console.log(`${this.name} is driving${car}`);
      }
  }

  class Child extends Parent {
      constructor(name, location, school) {
          super(name, location);
          this.school = school;
      }
      doHomework(assignment) {
        console.log(`Deliverable: ${assignment}`); // temperate literal
  }
}

    const parentOne = new Parent('Sarah', 'LA');
    parentOne.name; //console.log
    parentOne.location;
    parentOne.drive('Mercedes');

    const childOne = new Child('Robert', 'LA', 'Private School');
    childOne.name;
    childOne.location;
    childOne.school;

    childOne.drive('Honda') // method that comes from Parent
    childOne.doHomework('Physics'); // method is on the class Child

    class Player {
        constructor(name, team) {
            this.name = name;
            this.team = team;
        }
        dunk(scrub) {
            console.log(`${this.name} dunked over ${scrub}`);
        }
    }
    class Opponent extends Player {
        constructor(name, team, style) {
            super(name,team);
            this.style = style;
        }
        doHomework(assignment) {
            console.log(`Deliverable: ${assignment}`); // temperate literal
    }
    }
    const playerOne = new Player('Kobe Bean', 'Lakers');
    playerOne.name;
    playerOne.team;
    playerOne.dunk;

    const newOpponent = new Opponent('Michael Jordan', 'Bulls', 'Scorer';
    newOpponent