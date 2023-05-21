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
    scene: [ Load, Menu ]
}

let game = new Phaser.Game(config);
let linePosition = {x: 0, y: 0}
let stitch;
let currDot;
let points = [];
let connections = [];
let finishedConnecting;
let graphics;