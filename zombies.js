console.log("starting");


function Item(name){
  this.name = name;
}

function Weapon(name, damage){

  Item.call(this, name); // call parent constructor
  this.damage = damage;
  this.name = name;
}

Weapon.prototype = Object.create(Item.prototype);


function Food(name, energy, energyNum){
  Item.call(this, name);
  this.name = name;
  this.energy = energy;
  this.energyNum = energyNum;
}

Food.prototype = Object.create(Item.prototype);


// player class
function Player(name,health,strength,speed){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this._pack = [];
    this._maxHealth = health;
    this.maxHealth = undefined;
    this.isAlive = true;
    this.equipped = false;

  }

  Player.prototype.getPack = function(){
    return this._pack;
  };

  Player.prototype.getMaxHealth = function(){
    return this._maxHealth;
  };

  Player.prototype.takeItem = function(item){

    if(this._pack.length > 2){
      console.log('pack is full ' + Player.name);
      return false;
    
    }else{
      console.log(Player.name + 'storing ' + item + 'was successful');
      this._pack.push(item);
    }
  };  


Player.prototype.discardItem = function(item){
    if(this._pack.indexOf(item) !== -1){
      let idx = this._pack.indexOf(item); //sets item value to idx in arry[pack]
        this._pack.splice(idx,1);
        console.log(Player.name + 'the ' + item + 'has been discarded');
        return true;
    }
};

Player.prototype.checkPack = function(){
  console.log(this.getPack());
  return this.getPack();
};

Player.prototype.equip = function(itemToEquip){
    let itemLocation = this._pack.indexOf(itemToEquip);
    if(itemToEquip instanceof Weapon && itemLocation > -1 && !this.equipped){
      this.equipped = itemToEquip;
      this._pack.splice(itemLocation, 1);

  } else if (this.equipped !== false) {
      let newWeapon = this.equipped;
      this.equipped = itemToEquip;
      this._pack.splice(itemLocation, 1);
      this._pack.push(newWeapon);
    }
};
 

 Player.prototype.eat = function(itemToEat){
   let foodLocation = this._pack.indexOf(itemToEat);
    if(itemToEat instanceof Food && foodLocation > -1 && (this.health + itemToEat.energy) > this.getMaxHealth()){
     this._pack.splice(foodLocation, 1);
     this.health = this.getMaxHealth();
   } else if (itemToEat instanceof Food && foodLocation > -1) {
     this.health += itemToEat.energy;
     this._pack.splice(foodLocation, 1);
   } else {
     console.log("No Food In Bag");
   }
 };

Player.prototype.useItem = function(item){
  if(item instanceof Weapon){
    this.equip(item);
  } else if (item instanceof Food){
    this.eat(item);
  }
};


 // * If the item is a weapon, the player should equip the item.
 // * If the item is food, the player should eat the item.
 // * You should be able to invoke this function on a Player instance.
 // *
 // * @name useItem
 // * @param {Item/Weapon/Food} item   The item to use.
 // */


/**
 * Player Class Method => equippedWith()
 * -----------------------------
 * Player checks their equipment.
 *
 * Prints the player's name and equipped weapon's name.
 * If nothing is equipped, prints a message saying so.
 * Also returns the equipped weapon's name or false if nothing is equipped.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equippedWith
 * @return {string/boolean}   Weapon name or false if nothing is equipped.
 */


/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */


/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
