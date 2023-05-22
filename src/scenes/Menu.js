class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
        this.add.bitmapText(game.config.width / 2, game.config.height / 2, "CraftyGirls24", 'some story thing\n\nControls:\nClick and drag to from one point to another, where each point to click and drag from is highlighted in blue\n\nClick on the screen to play')
        .setOrigin(0.5)
        .setCenterAlign()
        .setMaxWidth(game.config.width)
        .setTintFill();
    }

    update() { 
        this.input.on('pointerup', () => {this.scene.start('firstMeeting')});
    }

}

