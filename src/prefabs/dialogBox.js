class Dialog extends Phaser.GameObjects.Sprite {


    constructor(scene, side, bodyText = '', textSpeed = 30) {

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
            y = game.config.height * 5/6
            bubbleType = 'largeGrandBubble'

        } else {
            console.log('Undifined Side on Dialog Box with :' + bodyText)
        }
        
        super(scene, x, y, bubbleType).setOrigin(.5);
        scene.add.existing(this);

        // if this is not a slow text box, display all text
        this.boxText = scene.add.bitmapText(x + textOffset,y, "CraftyGirls24", '').setOrigin(0.5).setCenterAlign().setMaxWidth(textWidth);


        this.x = x;
        this.y = y;
        this.textWidth = textWidth;
        this.scene = scene;
        this.textSpeed = textSpeed;
        this.textOffset = textOffset;
        this.isWaiting = false;
        this.isTyping = false;
        this.DialogToDisplayQ = new Queue();

    }

    addText(body, speed = this.textSpeed) {
        this.show()
        if (this.isWaiting || this.isTyping) {
            this.DialogToDisplayQ.enqueue(body)
        } else {
            this.displaySlowText(body, speed)
        }
    }

    displaySlowText(fullText, textSpeeeeeed = this.textSpeed) {
        this.isTyping = true;
        this.displaySlowTextR(fullText, textSpeeeeeed, 0)
        let timeToType = fullText.length * textSpeeeeeed * 1.3;
        this.typingTimer = this.scene.time.delayedCall(timeToType, () => {console.log('done writing'); this.isWaiting = true; this.isTyping = false}, null, this.scene)
        this.textdelay = this.scene.time.delayedCall(timeToType + 3000, () => {
            this.isWaiting = false
            if (!this.DialogToDisplayQ.isEmpty) this.displaySlowText(this.DialogToDisplayQ.dequeue(), this.textSpeed) 
        }, null, this.scene);        
    }

    displaySlowTextR(fullText, textSpeeeeeed, textIndex) {

        if (textIndex > fullText.length) return;
        this.boxText.setText(fullText.slice(0, textIndex))

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

    // when a box is clicked
    click() {
        if (!this.isTyping){
            if (this.DialogToDisplayQ.isEmpty) this.hide()
            else {
                this.textdelay.destroy()
                this.displaySlowText(this.DialogToDisplayQ.dequeue())
            }
        }
    }

    get finished (){
        return this.DialogToDisplayQ.isEmpty && !this.isTyping && !this.isWaiting
    }
}

class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
}

