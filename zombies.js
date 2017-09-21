
class Item {
  constructor(string){
    this.name = string;
  }
}


class Weapon extends Item{
  constructor(name, damage){
    super(name);
    this.damage = damage;
  }
}


 class Food extends Item {
  constructor(name, energy){
    super(name);
    this.energy = energy;
  }
 }


class Player {
  constructor(name,health,strength,speed){
    
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
  
  getPack(){
    return this._pack;
  }
  
  getMaxHealth(){
    return this._maxHealth;
  }
  
  takeItem(item){
    if(this._pack.length > 2){
      console.log('pack is full ' + Player.name);
      return false;
    }else{
      console.log(Player.name + 'storing ' + item + 'was successful');
      this._pack.push(item);
    }
  }
  checkPack(){
    console.log(this.getPack());
    return this.getPack();
  }

  discardItem(item){
    console.log(this._pack.indexOf(item));
    console.log(this._pack[this._pack.indexOf(item)]);
    if(this._pack.indexOf(item) !== -1){
      let idx = this._pack.indexOf(item);

      this._pack.splice(idx, 1);
      console.log(Player.name + ' the' + this.item + 'was scrapped');
      return true;
    }else{ 
      return false;
    }
  }
  equip(itemToEquip){
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
  }

 eat(itemToEat){
   let itemLocation = this._pack.indexOf(itemToEat);
   if(itemToEat instanceof Food && itemLocation > -1 && (this.health + itemToEat.energy) > this.getMaxHealth()){
     this._pack.splice(itemLocation, 1);
     this.health = this.getMaxHealth();
   } else if (itemToEat instanceof Food && itemLocation > -1) {
     this.health += itemToEat.energy;
     this._pack.splice(itemLocation, 1);
   } else {
     console.log("No Food In Bag");
   }
 }

  useItem(item) {
  if (item instanceof Weapon) {
    console.log(item);
    this.equip(item);
  } else if (item instanceof Food) {
    this.eat(item);
    console.log(this.equipped); 
  }
}
 

  equippedWith(){
    if (this.equipped){
      console.log('LOOK HERE',this.equipped);
      return this.equipped.name;
    } else{
      console.log('LOOK HERE 2',this.equipped);
      return false;
    }
  }


}//end player class



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


class Zombie {
 constructor(health, strength, speed) {
   this._maxHealth = health;
   this.health = health;
   this.strength = strength;
   this.speed = speed;
   this.isAlive = true;
 }
}

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
class FastZombie extends Zombie {
 constructor(health, strength, speed) {
   super(health, strength, speed);
   this.health = health;
   this.strength = strength;
   this.speed = speed;
 }
}

class StrongZombie extends Zombie {
 constructor(health, strength, speed) {
   super(health, strength, speed);
 }
}


 class RangedZombie extends Zombie {
 constructor(health, strength, speed) {
   super(health, strength, speed);
 }
}

class ExplodingZombie extends Zombie {
 constructor(health, strength, speed) {
   super(health, strength, speed);
 }
}

/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  var player = new Player("Justin", 500, 30, 70);
  var zombie = new Zombie(40, 50, 20);
  var charger = new FastZombie(175, 25, 60);
  var tank = new StrongZombie(250, 100, 15);
  var spitter = new RangedZombie(150, 20, 20);
  var boomer = new ExplodingZombie(50, 15, 10);

  var shovel = new Weapon("shovel", 15);
  var sandwich = new Food("sandwich", 30);
  var chainsaw = new Weapon("chainsaw", 25);

  player.takeItem(shovel);
  player.takeItem(sandwich);
  player.takeItem(chainsaw);
  player.discardItem(new Weapon("scythe", 21));
  player.discardItem(shovel);
  player.checkPack();
  player.takeItem(shovel);
  player.checkPack();

  player.equippedWith();
  player.useItem(chainsaw);
  player.equippedWith();
  player.checkPack();

  player.useItem(shovel);
  player.equippedWith();
  player.checkPack();

  player.health = 487;
  console.log("Before health: " + player.health);
  player.useItem(sandwich);
  console.log("After health: " + player.health);
  player.checkPack();
}
