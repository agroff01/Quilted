class Dialog extends Phaser.GameObjects.Sprite {
    constructor(scene, side, bodyText) {

        let x, y;
        let textWidth = (side != 'center' ? 300 : 900)

        if (side == 'left') {
            x = game.config.width /5
            y = game.config.height * 4/5

        } else if (side == 'right') {
            x = game.config.width
            y = game.config.height

        } else if (side == 'center'){
            x = game.config.width * 3/4
            y = game.config.height

        } else {
            console.log('Undifined Side on Dialog Box with :' + bodyText)
        }
        
        super(scene, x, y, 'speechBubble').setOrigin(.5);
        scene.add.existing(this);

        let btext = scene.add.bitmapText(x,y, "CraftyGirls24", bodyText).setOrigin(0.5).setCenterAlign().setMaxWidth(textWidth);
        
        this.x = x;
        this.y = y;
        this.textWidth = textWidth;
    }
}