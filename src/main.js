/**
 * Sources
 * 
 * line from image to image: https://stackoverflow.com/questions/68623945/draw-moving-line-in-phaser-3
 **/

let config = {
    type: Phaser.AUTO,
    width: 900,
    height: 1000,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Menu, FirstMeeting, Scene2 ]
}

let game = new Phaser.Game(config);