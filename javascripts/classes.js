'use strict';
var Gauntlet = (function(aug){

  /*
    TODO: Modularize this code with IIFE or Browserify
   */
  aug.GuildHall = {};
  console.log("1st Log",aug);


  /*
    Base function for a player, or enemy, class (profession)
   */
  aug.GuildHall.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    };
  };

  console.log("2nd Log", aug);
  /*
      FIGHTER CLASSES
        - Warrior
        - Valkyrie
        - Berserker
        - Monk
   */
  aug.GuildHall.Fighter = function() {
    this.healthBonus = 20;
    this.strengthBonus = 10;
  };
  aug.GuildHall.Fighter.prototype = new aug.GuildHall.PlayerClass();

  console.log("3rd Log", aug);


  aug.GuildHall.Warrior = function() {
    this.name = "Warrior";
    this.healthBonus = this.healthBonus + 25;
    this.strengthBonus = this.strengthBonus + 30;
  };

  aug.GuildHall.Warrior.prototype = new aug.GuildHall.Fighter();

  console.log("4th Log", aug);


  aug.GuildHall.Valkyrie = function() {
    this.name = "Valkyrie";
    this.healthBonus = this.healthBonus + 20;
    this.strengthBonus = this.strengthBonus + 10;
  };
  aug.GuildHall.Valkyrie.prototype = new aug.GuildHall.Fighter();

  console.log("5th Log", aug);


  aug.GuildHall.Berserker = function() {
    this.name = "Berserker";
    this.healthBonus = this.healthBonus + 35;
    this.strengthBonus = this.strengthBonus + 20;
  };
  aug.GuildHall.Berserker.prototype = new aug.GuildHall.Fighter();

  console.log("6th Log", aug);


  aug.GuildHall.Monk = function() {
    this.name = "Monk";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus + 40;
  };
  aug.GuildHall.Monk.prototype = new aug.GuildHall.Fighter();

  console.log("7th Log", aug);

  //COMMMENTING THIS OUT UNTIL NEEDED
  // /*
  //     MAGICAL CLASSES
  //       - Shaman
  //       - Wizard
  //       - Conujurer
  //       - Sorcerer
  //  */
  // GuildHall.Mage = function() {
  //   this.name = "Mage";
  //   this.magical = true;
  //   this.healthBonus = this.healthBonus - 10;
  //   this.strengthBonus = this.strengthBonus - 20;
  //   this.intelligenceBonus = this.intelligenceBonus + 20;
  // };
  // GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


  // GuildHall.Shaman = function() {
  //   this.name = "Shaman";
  //   this.healthBonus = this.healthBonus + 5;
  //   this.strengthBonus = this.strengthBonus - 10;
  //   this.intelligenceBonus = this.intelligenceBonus + 20;
  // };
  // GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


  // GuildHall.Wizard = function() {
  //   this.name = "Wizard";
  //   this.healthBonus = this.healthBonus - 15;
  //   this.strengthBonus = this.strengthBonus - 25;
  //   this.intelligenceBonus = this.intelligenceBonus + 40;
  // };
  // GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


  // GuildHall.Conjurer = function() {
  //   this.name = "Conjurer";
  //   this.strengthBonus = this.strengthBonus - 10;
  //   this.intelligenceBonus = this.intelligenceBonus + 10;
  // };
  // GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


  // GuildHall.Sorcerer = function() {
  //   this.name = "Sorcerer";
  //   this.healthBonus = this.healthBonus - 5;
  //   this.strengthBonus = this.strengthBonus - 20;
  //   this.intelligenceBonus = this.intelligenceBonus + 30;
  // };
  // GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


  /*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
   */

  return aug;

})(Gauntlet || {});
