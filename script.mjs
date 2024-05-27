// TODO: Part One - Humble Beginnings,
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    },
    felineFriend: {
        name: "Frank",
        type: "Flea",
        inventory: ["Small hat", "Sunglasses"]
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
};

for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}

adventurer.roll();

// TODO: Part Two - Class Fantasy,

// Each object has a name. felineFriend and Robin both have inventories. type describes what the object is, in this instance they are a cat and flea.

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }

    static MAX_HEALTH = 100;
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.felineFriend = new Character("Frank");
robin.companion.felineFriend.type = "Flea";
robin.companion.felineFriend.inventory = ["Small hat", "Sunglasses"];

robin.companion.felineFriend.roll();
robin.companion.roll();

// TODO: Part Three - Class Features, && TODO: Part Four - Class Uniforms, && TODO: Part Six - Developing Skills, 

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized rolls
        this.role = role;
        // Every adcenturer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        this.weapons = ["wrench"];
        this.healthPotions = 5;
        this.level = 13;
        this.xP = 130;
        this.diamondsCollected = 0;
    }

    static check(role) {
        return Adventurer.ROLES.includes(role);
    }

    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    // Adventurers are able to collect Diamonds.
    collectDiamonds(numDiamonds) {
        this.diamondsCollected += numDiamonds;
        console.log(`${this.name} has encountered ${numDiamonds} diamonds and collected it`);
    }

    static ROLES = ["Fighter", "Healer", "Wizard", "Sniper"];

    duel(badGuy) {
        while (this.health > 50 && badGuy.health > 50) {
            const thisRoll = this.roll();
            const badGuyRoll = badGuy.roll();
            if (thisRoll > badGuyRoll) {
                badGuy.health -= 1;
            } else {
                this.health -= 1;
            }
            console.log(`${this.name} rolled a ${thisRoll}. ${badGuy.name} rolled a ${badGuyRoll}.`);
            console.log(`${this.name}'s health: ${this.health}, ${badGuy.name}'s health: ${badGuy.health}`);
        }
        if (this.health > 50) {
            console.log(`${this.name} wins the duel!`);
        } else {
            console.log(`${badGuy.name} wins the duel!`);
        }
    }
}
// TODO: healing method as an additional resource for characters if have time
// class Healer extends Adventurer {
//     constructor(name) {
//         super(name, "Healer");
//     }

//     heal(target) {
//         const healed = 
//     }
//     console.log();
//     console.log();
// }

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

const robinAdventurer = new Adventurer("Robin", "Sniper"); // Adventurer class
const leo = new Companion("Leo", "Cat"); // Companion Class
const frank = new Companion("Frank", "Flea"); // Companion Class

robinAdventurer.companion = leo;
robinAdventurer.companion.felineFriend = frank;

console.log(robinAdventurer);
console.log(robinAdventurer.companion);
console.log(robinAdventurer.companion.felineFriend);

// TODO: Part Five - Gather your Party,


class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
        return this.adventurers[index];
    }
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

// TODO: Part Seven - Adventure Forth,

const you = new Adventurer("Robin", "Sniper");
const enemy = new Adventurer("Leo", "Wizard");

you.duel(enemy);

/* SAMPLE OUTPUT

sword
potion
artifact
Robin rolled a 16.
Frank rolled a 12.
Leo rolled a 16.
Adventurer {
  name: 'Robin',
  health: 100,
  inventory: [ 'bedroll', '50 gold coins' ],
  role: 'Sniper',
  weapons: [ 'wrench' ],
  healthPotions: 5,
  level: 13,
  xP: 130,
  diamondsCollected: 0,
  companion: Companion {
    name: 'Leo',
    health: 100,
    inventory: [],
    type: 'Cat',
    felineFriend: Companion {
      name: 'Frank',
      health: 100,
      inventory: [],
      type: 'Flea'
    }
  }
}
Companion {
  name: 'Leo',
  health: 100,
  inventory: [],
  type: 'Cat',
  felineFriend: Companion { name: 'Frank', health: 100, inventory: [], type: 'Flea' }
}
Companion { name: 'Frank', health: 100, inventory: [], type: 'Flea' }
Robin rolled a 1.
Leo rolled a 18.
Robin rolled a 1. Leo rolled a 18.
Robin's health: 99, Leo's health: 100
Robin rolled a 13.
Leo rolled a 20.
Robin rolled a 13. Leo rolled a 20.
Robin's health: 98, Leo's health: 100
Robin rolled a 5.
Leo rolled a 14.
Robin rolled a 5. Leo rolled a 14.
Robin's health: 97, Leo's health: 100
Robin rolled a 7.
Leo rolled a 1.
Robin rolled a 7. Leo rolled a 1.
Robin's health: 97, Leo's health: 99
Robin rolled a 4.
Leo rolled a 19.
Robin rolled a 4. Leo rolled a 19.
Robin's health: 96, Leo's health: 99
Robin rolled a 4.
Leo rolled a 13.
Robin rolled a 4. Leo rolled a 13.
Robin's health: 95, Leo's health: 99
Robin rolled a 7.
Leo rolled a 10.
Robin rolled a 7. Leo rolled a 10.
Robin's health: 94, Leo's health: 99
Robin rolled a 11.
Leo rolled a 16.
Robin rolled a 11. Leo rolled a 16.
Robin's health: 93, Leo's health: 99
Robin rolled a 19.
Leo rolled a 3.
Robin rolled a 19. Leo rolled a 3.
Robin's health: 93, Leo's health: 98
Robin rolled a 18.
Leo rolled a 7.
Robin rolled a 18. Leo rolled a 7.
Robin's health: 93, Leo's health: 97
Robin rolled a 5.
Leo rolled a 4.
Robin rolled a 5. Leo rolled a 4.
Robin's health: 93, Leo's health: 96
Robin rolled a 3.
Leo rolled a 10.
Robin rolled a 3. Leo rolled a 10.
Robin's health: 92, Leo's health: 96
Robin rolled a 18.
Leo rolled a 3.
Robin rolled a 18. Leo rolled a 3.
Robin's health: 92, Leo's health: 95
Robin rolled a 12.
Leo rolled a 3.
Robin rolled a 12. Leo rolled a 3.
Robin's health: 92, Leo's health: 94
Robin rolled a 1.
Leo rolled a 4.
Robin rolled a 1. Leo rolled a 4.
Robin's health: 91, Leo's health: 94
Robin rolled a 20.
Leo rolled a 1.
Robin rolled a 20. Leo rolled a 1.
Robin's health: 91, Leo's health: 93
Robin rolled a 9.
Leo rolled a 20.
Robin rolled a 9. Leo rolled a 20.
Robin's health: 90, Leo's health: 93
Robin rolled a 4.
Leo rolled a 3.
Robin rolled a 4. Leo rolled a 3.
Robin's health: 90, Leo's health: 92
Robin rolled a 13.
Leo rolled a 7.
Robin rolled a 13. Leo rolled a 7.
Robin's health: 90, Leo's health: 91
Robin rolled a 19.
Leo rolled a 20.
Robin rolled a 19. Leo rolled a 20.
Robin's health: 89, Leo's health: 91
Robin rolled a 7.
Leo rolled a 15.
Robin rolled a 7. Leo rolled a 15.
Robin's health: 88, Leo's health: 91
Robin rolled a 11.
Leo rolled a 3.
Robin rolled a 11. Leo rolled a 3.
Robin's health: 88, Leo's health: 90
Robin rolled a 6.
Leo rolled a 9.
Robin rolled a 6. Leo rolled a 9.
Robin's health: 87, Leo's health: 90
Robin rolled a 17.
Leo rolled a 16.
Robin rolled a 17. Leo rolled a 16.
Robin's health: 87, Leo's health: 89
Robin rolled a 12.
Leo rolled a 1.
Robin rolled a 12. Leo rolled a 1.
Robin's health: 87, Leo's health: 88
Robin rolled a 14.
Leo rolled a 5.
Robin rolled a 14. Leo rolled a 5.
Robin's health: 87, Leo's health: 87
Robin rolled a 10.
Leo rolled a 5.
Robin rolled a 10. Leo rolled a 5.
Robin's health: 87, Leo's health: 86
Robin rolled a 14.
Leo rolled a 9.
Robin rolled a 14. Leo rolled a 9.
Robin's health: 87, Leo's health: 85
Robin rolled a 19.
Leo rolled a 5.
Robin rolled a 19. Leo rolled a 5.
Robin's health: 87, Leo's health: 84
Robin rolled a 10.
Leo rolled a 12.
Robin rolled a 10. Leo rolled a 12.
Robin's health: 86, Leo's health: 84
Robin rolled a 17.
Leo rolled a 16.
Robin rolled a 17. Leo rolled a 16.
Robin's health: 86, Leo's health: 83
Robin rolled a 2.
Leo rolled a 4.
Robin rolled a 2. Leo rolled a 4.
Robin's health: 85, Leo's health: 83
Robin rolled a 14.
Leo rolled a 10.
Robin rolled a 14. Leo rolled a 10.
Robin's health: 85, Leo's health: 82
Robin rolled a 12.
Leo rolled a 4.
Robin rolled a 12. Leo rolled a 4.
Robin's health: 85, Leo's health: 81
Robin rolled a 3.
Leo rolled a 9.
Robin rolled a 3. Leo rolled a 9.
Robin's health: 84, Leo's health: 81
Robin rolled a 2.
Leo rolled a 14.
Robin rolled a 2. Leo rolled a 14.
Robin's health: 83, Leo's health: 81
Robin rolled a 14.
Leo rolled a 13.
Robin rolled a 14. Leo rolled a 13.
Robin's health: 83, Leo's health: 80
Robin rolled a 15.
Leo rolled a 2.
Robin rolled a 15. Leo rolled a 2.
Robin's health: 83, Leo's health: 79
Robin rolled a 3.
Leo rolled a 5.
Robin rolled a 3. Leo rolled a 5.
Robin's health: 82, Leo's health: 79
Robin rolled a 19.
Leo rolled a 2.
Robin rolled a 19. Leo rolled a 2.
Robin's health: 82, Leo's health: 78
Robin rolled a 20.
Leo rolled a 9.
Robin rolled a 20. Leo rolled a 9.
Robin's health: 82, Leo's health: 77
Robin rolled a 7.
Leo rolled a 14.
Robin rolled a 7. Leo rolled a 14.
Robin's health: 81, Leo's health: 77
Robin rolled a 19.
Leo rolled a 6.
Robin rolled a 19. Leo rolled a 6.
Robin's health: 81, Leo's health: 76
Robin rolled a 7.
Leo rolled a 12.
Robin rolled a 7. Leo rolled a 12.
Robin's health: 80, Leo's health: 76
Robin rolled a 1.
Leo rolled a 2.
Robin rolled a 1. Leo rolled a 2.
Robin's health: 79, Leo's health: 76
Robin rolled a 7.
Leo rolled a 17.
Robin rolled a 7. Leo rolled a 17.
Robin's health: 78, Leo's health: 76
Robin rolled a 18.
Leo rolled a 6.
Robin rolled a 18. Leo rolled a 6.
Robin's health: 78, Leo's health: 75
Robin rolled a 19.
Leo rolled a 15.
Robin rolled a 19. Leo rolled a 15.
Robin's health: 78, Leo's health: 74
Robin rolled a 7.
Leo rolled a 5.
Robin rolled a 7. Leo rolled a 5.
Robin's health: 78, Leo's health: 73
Robin rolled a 9.
Leo rolled a 14.
Robin rolled a 9. Leo rolled a 14.
Robin's health: 77, Leo's health: 73
Robin rolled a 4.
Leo rolled a 1.
Robin rolled a 4. Leo rolled a 1.
Robin's health: 77, Leo's health: 72
Robin rolled a 17.
Leo rolled a 9.
Robin rolled a 17. Leo rolled a 9.
Robin's health: 77, Leo's health: 71
Robin rolled a 18.
Leo rolled a 4.
Robin rolled a 18. Leo rolled a 4.
Robin's health: 77, Leo's health: 70
Robin rolled a 6.
Leo rolled a 13.
Robin rolled a 6. Leo rolled a 13.
Robin's health: 76, Leo's health: 70
Robin rolled a 4.
Leo rolled a 20.
Robin rolled a 4. Leo rolled a 20.
Robin's health: 75, Leo's health: 70
Robin rolled a 8.
Leo rolled a 11.
Robin rolled a 8. Leo rolled a 11.
Robin's health: 74, Leo's health: 70
Robin rolled a 11.
Leo rolled a 2.
Robin rolled a 11. Leo rolled a 2.
Robin's health: 74, Leo's health: 69
Robin rolled a 20.
Leo rolled a 14.
Robin rolled a 20. Leo rolled a 14.
Robin's health: 74, Leo's health: 68
Robin rolled a 16.
Leo rolled a 13.
Robin rolled a 16. Leo rolled a 13.
Robin's health: 74, Leo's health: 67
Robin rolled a 8.
Leo rolled a 20.
Robin rolled a 8. Leo rolled a 20.
Robin's health: 73, Leo's health: 67
Robin rolled a 19.
Leo rolled a 11.
Robin rolled a 19. Leo rolled a 11.
Robin's health: 73, Leo's health: 66
Robin rolled a 5.
Leo rolled a 13.
Robin rolled a 5. Leo rolled a 13.
Robin's health: 72, Leo's health: 66
Robin rolled a 16.
Leo rolled a 6.
Robin rolled a 16. Leo rolled a 6.
Robin's health: 72, Leo's health: 65
Robin rolled a 14.
Leo rolled a 3.
Robin rolled a 14. Leo rolled a 3.
Robin's health: 72, Leo's health: 64
Robin rolled a 6.
Leo rolled a 15.
Robin rolled a 6. Leo rolled a 15.
Robin's health: 71, Leo's health: 64
Robin rolled a 17.
Leo rolled a 15.
Robin rolled a 17. Leo rolled a 15.
Robin's health: 71, Leo's health: 63
Robin rolled a 2.
Leo rolled a 18.
Robin rolled a 2. Leo rolled a 18.
Robin's health: 70, Leo's health: 63
Robin rolled a 7.
Leo rolled a 10.
Robin rolled a 7. Leo rolled a 10.
Robin's health: 69, Leo's health: 63
Robin rolled a 16.
Leo rolled a 18.
Robin rolled a 16. Leo rolled a 18.
Robin's health: 68, Leo's health: 63
Robin rolled a 5.
Leo rolled a 4.
Robin rolled a 5. Leo rolled a 4.
Robin's health: 68, Leo's health: 62
Robin rolled a 16.
Leo rolled a 9.
Robin rolled a 16. Leo rolled a 9.
Robin's health: 68, Leo's health: 61
Robin rolled a 19.
Leo rolled a 13.
Robin rolled a 19. Leo rolled a 13.
Robin's health: 68, Leo's health: 60
Robin rolled a 16.
Leo rolled a 9.
Robin rolled a 16. Leo rolled a 9.
Robin's health: 68, Leo's health: 59
Robin rolled a 20.
Leo rolled a 4.
Robin rolled a 20. Leo rolled a 4.
Robin's health: 68, Leo's health: 58
Robin rolled a 13.
Leo rolled a 8.
Robin rolled a 13. Leo rolled a 8.
Robin's health: 68, Leo's health: 57
Robin rolled a 3.
Leo rolled a 10.
Robin rolled a 3. Leo rolled a 10.
Robin's health: 67, Leo's health: 57
Robin rolled a 19.
Leo rolled a 13.
Robin rolled a 19. Leo rolled a 13.
Robin's health: 67, Leo's health: 56
Robin rolled a 4.
Leo rolled a 9.
Robin rolled a 4. Leo rolled a 9.
Robin's health: 66, Leo's health: 56
Robin rolled a 7.
Leo rolled a 13.
Robin rolled a 7. Leo rolled a 13.
Robin's health: 65, Leo's health: 56
Robin rolled a 17.
Leo rolled a 17.
Robin rolled a 17. Leo rolled a 17.
Robin's health: 64, Leo's health: 56
Robin rolled a 15.
Leo rolled a 19.
Robin rolled a 15. Leo rolled a 19.
Robin's health: 63, Leo's health: 56
Robin rolled a 11.
Leo rolled a 18.
Robin rolled a 11. Leo rolled a 18.
Robin's health: 62, Leo's health: 56
Robin rolled a 14.
Leo rolled a 11.
Robin rolled a 14. Leo rolled a 11.
Robin's health: 62, Leo's health: 55
Robin rolled a 14.
Leo rolled a 15.
Robin rolled a 14. Leo rolled a 15.
Robin's health: 61, Leo's health: 55
Robin rolled a 17.
Leo rolled a 9.
Robin rolled a 17. Leo rolled a 9.
Robin's health: 61, Leo's health: 54
Robin rolled a 9.
Leo rolled a 7.
Robin rolled a 9. Leo rolled a 7.
Robin's health: 61, Leo's health: 53
Robin rolled a 2.
Leo rolled a 4.
Robin rolled a 2. Leo rolled a 4.
Robin's health: 60, Leo's health: 53
Robin rolled a 13.
Leo rolled a 18.
Robin rolled a 13. Leo rolled a 18.
Robin's health: 59, Leo's health: 53
Robin rolled a 10.
Leo rolled a 16.
Robin rolled a 10. Leo rolled a 16.
Robin's health: 58, Leo's health: 53
Robin rolled a 1.
Leo rolled a 16.
Robin rolled a 1. Leo rolled a 16.
Robin's health: 57, Leo's health: 53
Robin rolled a 8.
Leo rolled a 2.
Robin rolled a 8. Leo rolled a 2.
Robin's health: 57, Leo's health: 52
Robin rolled a 4.
Leo rolled a 1.
Robin rolled a 4. Leo rolled a 1.
Robin's health: 57, Leo's health: 51
Robin rolled a 11.
Leo rolled a 16.
Robin rolled a 11. Leo rolled a 16.
Robin's health: 56, Leo's health: 51
Robin rolled a 12.
Leo rolled a 12.
Robin rolled a 12. Leo rolled a 12.
Robin's health: 55, Leo's health: 51
Robin rolled a 12.
Leo rolled a 1.
Robin rolled a 12. Leo rolled a 1.
Robin's health: 55, Leo's health: 50
Robin wins the duel!

*/