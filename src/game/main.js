/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */
var game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    'game',    
    {
        init: init,
        preload: preload,
        create: create,
        update: update
    }
);

function init() {

    // Create simple text display for current Phaser version
    var text = "Phaser Version "+Phaser.VERSION + " works!";
    var style = { font: "24px Arial", fill: "#fff", align: "center" };
    var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
    t.anchor.setTo(0.5, 0.5);
}






