class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    create() {

        this.background = this.add.image(game.config.width / 2, game.config.height / 3.9, 'endCreditBack').setOrigin(0.5, 0.5).setScale(0.24);
        this.background = this.add.image(game.config.width / 2, game.config.height / 1.295, 'endCreditBack').setOrigin(0.5, 0.5).setScale(0.24);
        
        this.add.bitmapText(game.config.width / 2, game.config.height / 3, "CraftyGirls24", 'Thank you for playing!\n\nClick on the screen again to restart')
        .setOrigin(0.5, 0.5)
        .setCenterAlign()
        .setFontSize(35)
        .setMaxWidth(game.config.width);

        this.add.bitmapText(game.config.width / 2, game.config.height / 1.25, "CraftyGirls24", 'Credits:\n\nArt and Narrative: Anna Schultz\n\nCode: Alex Groff & Marlene Inoue\n\nMusic: Old oak by Olexy | https://lesfm.net/\nMusic promoted by https://www.chosic.com/free-music/all/\nCreative Commons CC BY 3.0\nhttps://creativecommons.org/licenses/by/3.0/').setOrigin(0.5, 0.5).setCenterAlign().setFontSize(20);
    }

    update() {
        this.input.on('pointerup', () => {
            this.sound.stopByKey('firstMeetingBGMusic');
            this.scene.start('menuScene')
        });
            
    }
}