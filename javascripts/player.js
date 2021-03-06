'use strict';
var Gauntlet = (function(aug){

  /*
    TODO: Modularize this code with IIFE or Browserify
   */

  aug.Combatants = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  aug.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;

    this.playerName = name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);
    this.limbs = ["head", "neck", "arm", "leg", "torso"];
    this.skinColor = "gray";
    this.skinColors = [this.skinColor];
    this.strength = 90;
    this.intelligence = 90;

    this.toString = function() {
      var output = [this.playerName,
        ": a ",
        this.skinColor,
        " skinned ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health. ",
        (this.class.magical) ? "Able to cast " : " Wielding a ",
        this.weapon.toString(),
        "!"
      ].join("");
      return output;
    };
  };

  aug.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

  aug.Combatants.Player.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.Combatants[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };

  /*
    Define the base properties for a human in a
    constructor function.
   */
  aug.Combatants.Human = function() {
    var randomSkin;

    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.skinColors.push("brown", "red", "white", "disease");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  };
  aug.Combatants.Human.prototype = new Gauntlet.Combatants.Player();





  /*
    Define the base properties for a magicians in a
    constructor function.
   */
  aug.Combatants.Magician = function() {
    var randomSkin;

    this.species = "Magician";
    this.intelligence = this.intelligence + 40;

    this.skinColors.push("pale", "black", "white", "mountain blue");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    this.allowedClasses = ["Sarman", "Wizard", "Conjurer", "Sorcerer"];
  };
  aug.Combatants.Magician.prototype = new Gauntlet.Combatants.Player();


















  /*
    Define the base properties for a monster in a
    constructor function.
   */

  aug.Combatants.Monster = function() {
    this.health = this.health - 30;
    this.intelligence = this.intelligence -20;
    this.strength = this.strength + 30;
  };

  aug.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();



  console.log("player", aug);

  return aug;
})(Gauntlet || {});

