class Dialog extends Phaser.GameObjects.Sprite {


    constructor(scene, side, bodyText = '', isSlowText = true, textSpeed = 30) {

        let x, y;
        let textWidth = (side != 'center' ? 300 : game.config.width * 4/5)
        let bubbleType = '';
        let textOffset = 0;

        if (side == 'left') {
            x = game.config.width / 5
            y = game.config.height * 5/6
            bubbleType = 'playerBubble';
            textOffset = 20 

        } else if (side == 'right') {
            x = game.config.width * 3/4
            y = game.config.height * 5/6
            bubbleType = 'grandBubble'
            textOffset = -10

        } else if (side == 'center'){
            x = game.config.width / 2 
            y = game.config.height * 4/5

        } else {
            console.log('Undifined Side on Dialog Box with :' + bodyText)
        }
        
        super(scene, x, y, 'speechBubble').setOrigin(.5);
        scene.add.existing(this);

        // if this is not a slow text box, display all text
        this.boxText = scene.add.bitmapText(x + textOffset,y, "CraftyGirls24", (isSlowText ? '' : bodyText)).setOrigin(0.5).setCenterAlign().setMaxWidth(textWidth);
        

        this.x = x;
        this.y = y;
        this.textWidth = textWidth;
        this.scene = scene;
        this.textSpeed = textSpeed;
        this.textOffset = textOffset;
        this.isWriting = false;
        this.DialogToDisplayQ = new Queue();
    }


    changeText(newText) {
        this.boxText.setText(newText)
    }

    addText(body, speed = this.textSpeed) {
        if (this.isWriting) {
            this.DialogToDisplayQ.enqueue(body)
        } else {
            this.displaySlowText(body, speed)
        }
    }

    displaySlowText(fullText, textSpeeeeeed = this.textSpeed) {
        this.isWriting = true;
        this.displaySlowTextR(fullText, textSpeeeeeed, 0)
        this.scene.time.delayedCall(2500, () => {
            this.isWriting = false
            if (!this.DialogToDisplayQ.isEmpty) this.displaySlowText(this.DialogToDisplayQ.dequeue(), this.textSpeed)
        }, null, this.scene);        
    }

    displaySlowTextR(fullText, textSpeeeeeed, textIndex) {

        if (textIndex >= fullText.length) return;
        this.changeText(fullText.slice(0, textIndex))

        this.scene.time.delayedCall(textSpeeeeeed, () => {
            this.displaySlowTextR(fullText, textSpeeeeeed, textIndex+1)
            this.boxText.setPosition(this.x + this.textOffset, this.y)
        }, null, this.scene);
    }

    hide() {
        this.removeFromDisplayList();
        this.boxText.removeFromDisplayList();
    }

    show() {
        this.addToDisplayList();
        this.boxText.addToDisplayList();
    }
}