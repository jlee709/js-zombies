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

Player.prototype.equippedWith = function(){
    if (this.equipped){
      return this.equipped.name;
    } else{
      return false;
    }
  };


function Zombie(health, strength, speed){
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this._maxHealth = health;
  this.isAlive = true;
}

function FastZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}

FastZombie.prototype = Object.create(Zombie.prototype);


function StrongZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}

StrongZombie.prototype = Object.create(Zombie.prototype);


function RangedZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}

RangedZombie.prototype = Object.create(Zombie.prototype);


function ExplodingZombie(health, strength, speed){
  Zombie.call(this,health,strength,speed);
}

ExplodingZombie.prototype = Object.create(Zombie.prototype);




function runGame() {
  var player = new Player("JustinCredable", 500, 30, 70);
  var zombie = new Zombie(40, 50, 20);
  var charger = new FastZombie(175, 25, 60);
  var tank = new StrongZombie(250, 100, 15);
  var spitter = new RangedZombie(150, 20, 20);
  var boomer = new ExplodingZombie(50, 15, 10);

  var shovel = new Weapon("seal club", 15);
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
