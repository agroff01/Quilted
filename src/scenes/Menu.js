class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
        this.add.bitmapText(game.config.width / 2, game.config.height / 2, "CraftyGirls24", 'Quilted\n\nYou come by your grandma\'s house to create a quilt for a school project. Unsure of what to create, your grandma gives you the idea to create a quilt of your family. And so, you sew the memories your grandma shared with your grandpa.\n\nControls:\nClick and drag to from one point to another.\n\nClick on the screen to play')
        .setOrigin(0.5)
        .setCenterAlign()
        .setMaxWidth(game.config.width)
        .setTintFill();
     
    } 

    update() {
        this.input.on('pointerup', () => {this.scene.start('firstMeeting')});
    }

}

