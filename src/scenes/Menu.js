class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    preload() {

    }

    create() {
        this.testPhysicsObject = this.physics.add.body(game.config.width/2, game.config.height/2, 50,50);

        this.time.delayedCall(2000, () => {
            this.testPhysicsObject.setCircle(25);
        }, null, this);
    }

    update() {}
}