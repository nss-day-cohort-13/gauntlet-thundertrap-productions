$(document).ready(function() {

    // Global variables
    var currentPlayer = '';
    var currentClass;
    var player;
    var orc;



    // Click Function on the (select class button) on the home screen, this will hold the value of the players name to use later in the DOM/console

    $("#class_button").click(function(e) {
        currentPlayer = $("#player-name").val();
        // console.log("button clicked", currentPlayer);
        Gauntlet.Combatants.Player.playerName = currentPlayer;
        console.log(" 1st log via (select class btn) - currentPlayer", currentPlayer);
    })



    // Which class you choose Click Function, attached to all classes

    $(".class__link").on("click", function(e) {
        // e.preventDefault();
        currentClass = $(event.currentTarget).children(".btn__text").html()
        console.log(" 1st log (each/which class btn clicked) - currentClass", currentClass);
    })

    // Which weapon you choose Click Function, attached to all weapons
    var currentWeapon;
    $(".weapon__link").on("click", function(e) {
        // e.preventDefault()
        currentWeapon = $(event.currentTarget).children(".btn__weapon__text").html()
        console.log("currentWeapon", currentWeapon);
    })



    // Select Your Weapon Click Function
    // var player;
    $("#weapon_button").click(function() {
        //switch statement to decide what the player selected for a weapon
        console.log("2nd log", currentClass);
        console.log("2nd log", currentPlayer);

        player = new Gauntlet.Combatants.Player();
        console.log("player health", player.health);
        player.playerName = currentPlayer;
        console.log("player, now that inherits new Gauntlet.Combatants.Player() function and now you can target the (this.whatever) in player.js", player.playerName);


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
    })



    // Defeat Your Enemies Click Function
    $("#defeat_your_enemies_button").click(function() {
        console.log("Clicked - defeat your enemies");
        console.log("currentWeapon", currentWeapon);

        switch (currentWeapon) {

            case "Dagger":
                player.weapon = new Dagger();
                console.log("player", player);
                battleground();
                break;

            case "Broad Sword":
                player.weapon = new BroadSword();
                console.log("player", player);
                battleground();
                break;

            case "War Axe":
                player.weapon = new WarAxe();
                console.log("player", player);
                battleground();
                break;

        }
    })

    // Get players health to use
    var playerHealth = function() {
        console.log("player.health", player.health);
        return player.health;
    }

    $("#attack_button").click(function attack() {

        player.health -= orc.weapon.damage;
        orc.health -= player.weapon.damage;

        console.log("orc.weapon.damage", orc.weapon.damage);
        console.log("orc.weapon.damage", orc.health);
        console.log("player.weapon.damage", player.weapon.damage);
        console.log("player.weapon.damage", player.health);


        playerOutput = `<p>${player.class} ${player.playerName}</p>` +
            `<div class="health">Health: ${player.health}</div>`;
        $(".playerStats").html(playerOutput);

        enemyOutput = `<p>${orc.monsterName}</p>` +
            `<div class="health">Health: ${orc.health}</div>`;
        $(".enemyStats").html(enemyOutput);

        if (player.health <= 0 && player.health < orc.health) {
            alert(`${player.playerName}` + " LOOSES!");
            $(".attack-button").addClass("hide");
        }
        if (orc.health <= 0 && orc.health < player.health) {
            alert(`${player.playerName}` + " WINS!");
            $(".attack-button").addClass("hide");
        }
    })


    // battleground function does a lot,
        // it is called a few times in the function starting on line 76
    function battleground() {
        console.log("Players name: ", player.playerName);
        console.log("Players class:", player.class);
        console.log("Players stats: ", player.health);

        // Sets Orc to the inheritance of the Orc constructor function
        orc = new Gauntlet.Combatants.Orc();
        orc.setWeapon(new BroadSword()); //
        orc.generateClass();
        orc.playerName = "Enemy Orc";
        console.log(orc.toString());

        // Populates the DOM with the players initial stats
        playerOutput = `<p>${player.class} ${player.playerName}</p>` +
            `<div class="health">Health: ${player.health}</div>`;
        $(".playerStats").html(playerOutput);

        enemyOutput = `<p>${orc.monsterName}</p>` +
            `<div class="health">Health: ${orc.health}</div>`;
        $(".enemyStats").html(enemyOutput);

    };


    //COMMENTING IT OUT UNTIL NEEDED
    // /*
    //   Test code to generate a human player and an orc player
    //  */
    // var warrior = new Gauntlet.Combatants.Human();
    // warrior.setWeapon(new WarAxe());
    // warrior.generateClass();  // This will be used for "Surprise me" option
    // console.log(warrior.toString());

    // var orc = new Gauntlet.Combatants.Orc();
    // orc.generateClass();
    // orc.setWeapon(new BroadSword());
    // console.log(orc.toString());

    // /*
    //   Test code to generate a spell
    //  */
    // var spell = new Gauntlet.SpellBook.Sphere();
    // console.log("spell: ", spell.toString());


    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
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
    $(".card__back").click(function(e) {
        var previousCard = $(this).attr("previous");
        $(".card").hide();
        $("." + previousCard).show();
    });

});
