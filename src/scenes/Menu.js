class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
     
        this.box = new Dialog(this, 'right', 'This is some example default text on the right box', false, 50)
        this.box.displaySlowText('Heeeeeeeeeyyyyyyyy')

        this.time.delayedCall(2500, () => {
            this.box.addText("This is text to test if thisgs can run quickly and efficiently with words")
            this.box.addText("This is text to test if thisgs can run quickly and efficiently with words")

        }, null, this);
    }

    update() {}
}