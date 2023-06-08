class ToBeContinued extends Phaser.Scene {

    constructor() {
        super('toBeContinued');
    }

    create() {

        this.time.delayedCall(1500, () => {
            this.displaySlowTextR('To Be Continued . . .', 150, 0)
        }, this)
        this.text = this.add.bitmapText(game.config.width/2, game.config.height/2, "CraftyGirls24", '').setOrigin(0.5).setCenterAlign().setTintFill();        ;
    }

    update() {
        this.input.on('pointerup', () => {this.scene.start('scene2')});
    }

    displaySlowTextR(fullText, textSpeeeeeed, textIndex) {

        if (textIndex > fullText.length) return;
        this.text.setText(fullText.slice(0, textIndex))

        this.time.delayedCall(textSpeeeeeed, () => {
            this.displaySlowTextR(fullText, textSpeeeeeed, textIndex+1)
        }, null, this);
    }
}