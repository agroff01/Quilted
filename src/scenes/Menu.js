class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
        this.testPhysicsObject = this.physics.add.body(game.config.width/2, game.config.height/2, 50,50);

        this.time.delayedCall(2000, () => {
            this.testPhysicsObject.setCircle(25);
        }, null, this);

        this.box = new Dialog(this, 'left', 'This is a testing text for the text box text');
    }

    update() {}
}