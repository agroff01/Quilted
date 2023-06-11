class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
        this.background = this.add.sprite(game.config.width / 2, game.config.height / 2, 'menuBackground', 0).setOrigin(0.5, 0.5);
        this.anims.create({
            key: 'chimney',
            frames: this.anims.generateFrameNames('menuBackground', {prefix: 'Title_Screen ', end: 10, suffix: ''}),
            frameRate: 10,
            repeat: -1,
        });
        this.background.anims.play('chimney');

        this.add.sprite((game.config.width / 1.35), (game.config.height / 9), 'title', 0).setOrigin(0.5, 0.5).setScale(0.6);

        this.add.bitmapText(game.config.width / 2, game.config.height / 2, "CraftyGirls24", 'You come by your grandma\'s house to create a quilt for a school project. Unsure of what to create, your grandma gives you the idea to create a quilt of your family. And so, you sew the memories your grandma shared with your grandpa.\n\nControls:\nClick and drag to from one point to another.\nPress Space to advance the dialog.')
        .setOrigin(0.5)
        .setCenterAlign()
        .setMaxWidth(game.config.width / 1.1)
        .setTintFill();

        this.add.bitmapText(game.config.width / 2, game.config.height / 1.2, "CraftyGirls24", 'Click on the screen to play\n\nPress C for Credits')
        .setOrigin(0.5)
        .setCenterAlign()
        .setMaxWidth(game.config.width / 1.1)
        .setTintFill();

        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    } 

    update() {
        this.input.on('pointerup', () => {this.scene.start('firstMeeting')});

        if (Phaser.Input.Keyboard.JustDown(this.keyC)) {
            this.scene.start('creditsScene');    
        }
    }

}

