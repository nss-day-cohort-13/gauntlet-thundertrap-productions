'use strict';
var Gauntlet = (function(aug){

  aug.weapons = {};

  aug.weapons.Weapon = function() { // constructor function for all weapons
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    };
  };


  // All weapons below will be a prototype of - new Weapon()
  aug.weapons.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
  };
  aug.weapons.Dagger.prototype = new aug.weapons.Weapon();

  aug.weapons.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
  };
  aug.weapons.BroadSword.prototype = new aug.weapons.Weapon();

  aug.weapons.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
  };
  aug.weapons.WarAxe.prototype = new aug.weapons.Weapon();

  console.log("weapons", aug);

  return aug;

})(Gauntlet || {});
