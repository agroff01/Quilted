class ToBeContinued extends Phaser.Scene {

    constructor() {
        super('toBeContinued');
    }

    create() {
        this.background = this.add.image(this.game.config.width/2,0,'combinedQuilt').setScale(.425).setOrigin(0.5,0);

        this.text = this.add.bitmapText(game.config.width/2, game.config.height* (6/7), "CraftyGirls24", '', 40).setOrigin(0.5).setCenterAlign();
        
        this.cam = this.cameras.main.fadeIn(3000, 0, 0, 0, null, this);
        this.cam.on('camerafadeincomplete', () => {
            this.tweens.add({
                targets: this.background,
                y: -270,
                ease: 'Quad.InOut',
                duration: 4000,
            });
        });


        this.time.delayedCall(10000, () => {
            this.displaySlowTextR('To Be Continued . . .', 150, 0)
            

            this.time.delayedCall(9000, () => {
                this.cam = this.cameras.main.fadeOut(4000, 0, 0, 0);
                
                this.cam.on('camerafadeoutcomplete', () => {
                    this.scene.start('scene2');
                })
            })
            

        }, this);

        

    }

    update() {
        //this.input.on('pointerup', () => {this.scene.start('scene2')});
    }

    displaySlowTextR(fullText, textSpeeeeeed, textIndex) {

        if (textIndex > fullText.length) return;
        this.text.setText(fullText.slice(0, textIndex))

        this.time.delayedCall(textSpeeeeeed, () => {
            this.displaySlowTextR(fullText, textSpeeeeeed, textIndex+1)
        }, null, this);
    }
}