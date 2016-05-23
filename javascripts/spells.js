'use strict';
var Gauntlet = (function(aug){
  /*
    TODO: Modularize this code with IIFE or Browserify
   */
  aug.SpellBook = {};


  /*
    Base spell function that defines name, damage, damage type
   */
  aug.SpellBook.Spell = function() {
    this.name = "";
    this.damage = 0;

    this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
    this.type = "";

    this.toString = function() {
      return this.name + " of " + this.type + " for " + this.damage + " damage!";
    };
  };

  /*
    An elemental sphere that can be cast by a magical class
   */
  aug.SpellBook.Spell.Sphere = function() {
    this.name = "sphere";
    this.damage = Math.floor(Math.random() * 10 + 10);

    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  aug.SpellBook.Spell.Sphere.prototype = new Gauntlet.SpellBook.Spell();

  console.log("spells", aug);

  return aug;

})(Gauntlet || {});
