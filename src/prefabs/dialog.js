class Dialog extends Phaser.GameObjects.Sprite {


    constructor(scene, side, bodyText = '', isSlowText = true, textSpeed = 30) {

        let x, y;
        let textWidth = (side != 'center' ? 300 : 900)

        if (side == 'left') {
            x = game.config.width / 5
            y = game.config.height * 4/5

        } else if (side == 'right') {
            x = game.config.width * 3/4
            y = game.config.height * 4/5

        } else if (side == 'center'){
            x = game.config.width / 2 
            y = game.config.height * 4/5

        } else {
            console.log('Undifined Side on Dialog Box with :' + bodyText)
        }
        
        super(scene, x, y, 'speechBubble').setOrigin(.5);
        scene.add.existing(this);

        // if this is not a slow text box, display all text
        this.boxText = scene.add.bitmapText(x,y, "CraftyGirls24", (isSlowText ? '' : bodyText)).setOrigin(0.5).setCenterAlign().setMaxWidth(textWidth);
        

        this.x = x;
        this.y = y;
        this.textWidth = textWidth;
        this.scene = scene;
        this.textSpeed = textSpeed;
    }


    changeText(newText) {
        this.boxText.setText(newText)
    }

    displaySlowText(fullText, textSpeeeeeed = this.textSpeed, textIndex = 0) {

        if (textIndex >= fullText.length) return;
        this.changeText(fullText.slice(0, textIndex))

        this.scene.time.delayedCall(textSpeeeeeed, () => {
            this.displaySlowText(fullText, textSpeeeeeed, textIndex+1)
        }, null, this.scene);
    }
}