'use strict';
var Gauntlet = (function(aug) {
    // Global variables
    var currentPlayer = '';
    var currentClass;
    var player;
    var orc;



    // Click Function on the (select class button) on the home screen, this will hold the value of the players name to use later in the DOM/console

    $("#class_button").click(function() {
      currentPlayer = $("#player-name").val();
      Gauntlet.Combatants.Player.playerName = currentPlayer;
    });



    // Which class you choose Click Function, attached to all classes

    $(".class__link").on("click", function(event) {
      currentClass = $(event.currentTarget).children(".btn__text").html();
    });

    // Which weapon you choose Click Function, attached to all weapons
    var currentWeapon;
    $(".weapon__link").on("click", function(event) {
      currentWeapon = $(event.currentTarget).children(".btn__weapon__text").html();
    });



    // Select Your Weapon Click Function
    $("#weapon_button").click(function() {
      //switch statement to decide what the player selected for a weapon
      player = new Gauntlet.Combatants.Player();
      player.playerName = currentPlayer;

      switch (currentClass) {

        case "Warrior":
          player.class = new Gauntlet.GuildHall.Warrior();
          break;

        case "Valkyrie":
          player.class = new Gauntlet.GuildHall.Valkyrie();
          break;

        case "Berserker":
          player.class = new Gauntlet.GuildHall.Berserker();
          break;

        case "Monk":
          player.class = new Gauntlet.GuildHall.Monk();
          break;
      }
    });



    // Defeat Your Enemies Click Function
    $("#defeat_your_enemies_button").click(function() {
        switch (currentWeapon) {
          case "Dagger":
            player.weapon = new aug.weapons.Dagger();
            battleground();
            break;

          case "Broad Sword":
            player.weapon = new aug.weapons.BroadSword();
            battleground();
            break;

          case "War Axe":
            player.weapon = new aug.weapons.WarAxe();
            battleground();
            break;

        }
    });

    // Get players health to use
    var playerHealth = function() {
      return player.health;
    };

    var playerOutput;
    var enemyOutput;
    $("#attack_button").click(function attack() {

      player.health -= orc.weapon.damage;
      orc.health -= player.weapon.damage;

      playerOutput = `<p>${player.toString()}</p>` +
        `<div class="health">Health: ${player.health}</div>`;
      $("#playerStats").html(playerOutput);

      enemyOutput = `<p>${orc.toString()}</p>` +
        `<div class="health">Health: ${orc.health}</div>`;
      $("#enemyStats").html(enemyOutput);


      if (player.health <= 0 && player.health < orc.health) {
        alert(`${player.playerName} LOSES!`);
        console.log("lose");
        $("#attack_button").attr("disabled", true).addClass("disabledButton");
      } else if (orc.health <= 0 && orc.health < player.health) {
        alert(`${player.playerName} WINS!`);
        console.log("win");
        $("#attack_button").attr("disabled", true).addClass("disabledButton");
      } else if (player.health === 0 && player.health === orc.health) {
        alert(`You both lose! HAHAHAHAHA`);
        console.log("yall suck");
        $("#attack_button").attr("disabled", true).addClass("disabledButton");
      } else {

      }
    });


    // battleground function does a lot,
    // it is called a few times in the function starting on line 76
    function battleground() {

      // Sets Orc to the inheritance of the Orc constructor function
      orc = new Gauntlet.Enemies.Orc();
      orc.setWeapon(new aug.weapons.BroadSword());
      orc.generateClass();
      orc.playerName = "Enemy Orc";

      // Populates the DOM with the players initial stats
      playerOutput = `<p>${player.toString()}</p>` +
        `<div class="health">Health: ${player.health}</div>`;
      $("#playerStats").html(playerOutput);

      var enemyOutput = `<p>${orc.toString()}</p>` +
        `<div class="health">Health: ${orc.health}</div>`;
      $("#enemyStats").html(enemyOutput);

    }
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function() {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function() {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

    console.log("app.js", aug);

    return aug;
})(Gauntlet || {});
