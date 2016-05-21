Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.skinColor = null;
  this.species = "Orc";
  this.class = null;
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
  this.monsterName = "Orc Dude";

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  };

  this.toString = function() {
    var output = [this.monsterName,
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
      this.weapon,
      "!"
    ].join("");
    return output;
  };
  this.generateClass();
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();
