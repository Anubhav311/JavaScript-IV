/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

    //GAMEOBJECT CONSTRUCTOR'S TERRITORY
    class GameObject {
        constructor(gobj) {
            this.createdAt = gobj.createdAt;
            this.name = gobj.name;
            this.dimensions = gobj.dimensions;
        }

        destroy() {
            return `${this.name} was removed from the game.`;
        }
    }
    
    
    //CHARACTERSTATS CONSTRUCTOR'S TERRITORY
    class CharacterStats extends GameObject {
        constructor(cobj) {
            super(cobj);
            this.healthPoints = cobj.healthPoints;
        }

        takeDamage() {
            return `${this.name} took damage.`;
        }
    }
    
    
    //HUMANOID CONSTRUCTOR'S TERRITORY
    class Humanoid extends CharacterStats{
        constructor(hobj) {
            super(hobj);
            this.team = hobj.team;
            this.weapons = hobj.weapons;
            this.language = hobj.language;
        }

        greet() {
            return `${this.name} offers a greeting in ${this.language}.`
        }
    }
  
  

  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    //CONSTRUCTOR FUNCTIONS FOR STRETCH PROBLEMS
    class Villain extends Humanoid {
        constructor(vobj) {
            super(vobj);
            this.thunderBolt = vobj.thunderBolt;
        }
    }
  
    class Hero extends Humanoid {
        constructor(hobj) {
            super(hobj)
            this.ironFist = hobj.ironFist;
            this.finishingMove = hobj.finishingMove;
        }
    }
  
    //VILLAIN AND HERO OBJECTS FOR STRETCH PROBLEMS
    //Villain
    const villain = new Villain({
      thunderBolt: function(obj) {
        obj.healthPoints = obj.healthPoints -2;
        if(obj.healthPoints < 1) {
          console.log(`${obj.name} has been completely destroyed`);
        }
      },
      createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 3,
        height: 4,
      },
      healthPoints: 40,
      name: 'Thanos',
      team: 'One Man Army',
      weapons: 'Infinity Stones',
      language: 'Titanish',
    })
  
    //Hero
    const hero = new Hero({
      ironFist: function(obj) {
        obj.healthPoints = obj.healthPoints -1;
      },
      finishingMove: function(obj) {
        obj.healthPoints = 0;
        console.log(`You have won the game, and  completely destroyed the villain. Somebody call an ambulance!`)
      },
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Iron Man',
      team: 'Avengers',
      weapons: 'Nano-tech Suit',
      language: 'English',
    })
  
    //WAR ZONE
    //hero beating up archer
    hero.ironFist(swordsman);
    console.log(swordsman.healthPoints);
    hero.ironFist(swordsman);
    console.log(swordsman.healthPoints);
    console.log(swordsman);
  
  
    //villain beating up swordsman
    villain.thunderBolt(archer);
    console.log(archer.healthPoints); // 8
    villain.thunderBolt(archer);
    console.log(archer.healthPoints); // 6
    villain.thunderBolt(archer);
    console.log(archer.healthPoints); // 4
    villain.thunderBolt(archer);
    console.log(archer.healthPoints); // 2
    villain.thunderBolt(archer); 
    console.log(archer)// 0
  
    
    //here hero will use his finishing move on villain
    hero.finishingMove(villain);
    console.log(villain);