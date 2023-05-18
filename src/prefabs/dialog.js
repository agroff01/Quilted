class Dialog extends Phaser.GameObjects.Sprite {
    constructor(scene, side, text) {
        
        if (side == 'left')
            super(scene, x, y, texture, frame)
        else if (side == 'right')
            super(scene, x, y, texture, frame)
        else if (side == 'center')
            super(scene, x, y, texture, frame)
        else 
            console.log('Undifined Side on Dialog Box with :' + text)
    }
}