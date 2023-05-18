let config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Menu ]
}

let game = new Phaser.Game(config);