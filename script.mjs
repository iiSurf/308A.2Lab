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
        inventory: ["A small Hat", "Sunglasses"]
    }, 
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

for(let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}