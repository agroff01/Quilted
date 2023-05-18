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
    scene: [ Menu, Load ]
}

let game = new Phaser.Game(config);