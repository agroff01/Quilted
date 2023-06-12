class InBetween extends Phaser.Scene {
    constructor(){
        super('inBetween')
    }

    create() {
    
        this.text = this.add.bitmapText(game.config.width/2, game.config.height/2, "CraftyGirls24", '', 40).setOrigin(0.5).setCenterAlign();

        this.text.setTintFill();
            
        this.cam = this.cameras.main.fadeIn(3000, 0, 0, 0, null, this);

        this.time.delayedCall(2000, () => {
            this.displaySlowTextR('Six Months Later . . .', 150, 0);
    

            this.time.delayedCall(4000, () => {
                this.cam = this.cameras.main.fadeOut(4000, 0, 0, 0);
        
                this.cam.on('camerafadeoutcomplete', () => {
                    this.scene.start('secondMeeting');
                })
            })
    

        });

    }

    displaySlowTextR(fullText, textSpeeeeeed, textIndex) {

        if (textIndex > fullText.length) return;
        this.text.setText(fullText.slice(0, textIndex))

        this.time.delayedCall(textSpeeeeeed, () => {
            this.displaySlowTextR(fullText, textSpeeeeeed, textIndex+1)
        }, null, this);
    }

}