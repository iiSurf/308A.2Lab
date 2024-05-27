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
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

for(let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}

adventurer.roll();

// TODO: Part Two - Class Fantasy,

// Each object has a name. felineFriend and Robin both have inventories. type describes what the object is, in this instance they are a cat and flea.

class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
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

// TODO: Part Three - Class Features,

