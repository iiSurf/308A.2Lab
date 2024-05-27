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

// TODO: Part Three - Class Features, && TODO: Part Four - Class Uniforms,

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

    static ROLES = ["Fighter", "Healer", "Wizard"];
}

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
const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

// TODO: Part Six - Developing Skills, 

