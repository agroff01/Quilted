class Scene2 extends Phaser.Scene {
    constructor() {
        super('scene2');
    }

    create() {
        this.add.bitmapText(game.config.width / 2, game.config.height / 2, "CraftyGirls24", 'You\'ve finished the tutorial, click on the screen again to restart')
        .setOrigin(0.5)
        .setCenterAlign()
        .setMaxWidth(game.config.width)
        .setTintFill();
    }

    update() {
        this.input.on('pointerup', () => {this.scene.start('menuScene')});
    }
}