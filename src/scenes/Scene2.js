class Scene2 extends Phaser.Scene {
    constructor() {
        super('scene2');
    }

    create() {
        this.add.bitmapText(game.config.width / 2, game.config.height / 2, "CraftyGirls24", 'Thank you for playing our demo!\nClick on the screen again to restart')
        .setOrigin(0.5, 0.5)
        .setCenterAlign()
        .setMaxWidth(game.config.width)
        .setTintFill();

        this.add.text(game.config.width / 2, game.config.height / 1.5, 'credits:\nArt and Narrative: Anna Schultz\nCode: Alex Groff & Marlene Inoue\nMusic: Old oak by Olexy | https://lesfm.net/\nMusic promoted by https://www.chosic.com/free-music/all/\nCreative Commons CC BY 3.0\nhttps://creativecommons.org/licenses/by/3.0/').setOrigin(0.5, 0.5).setAlign('center');
    }

    update() {
        this.input.on('pointerup', () => {this.scene.start('menuScene')});
    }
}