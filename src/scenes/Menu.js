class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
     
        this.box = new Dialog(this, 'right', 'This is some example default text on the right box', false, 50)
        this.box.displaySlowText('Heeeeeeeeeyyyyyyyy')
    }

    update() {}
}