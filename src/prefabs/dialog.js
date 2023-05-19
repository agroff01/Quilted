class Dialog extends Phaser.GameObjects.Sprite {
    constructor(scene, side, bodyText) {

        const box = scene.textures.addDynamicTexture('box', 512, 512)

        box.stamp('speechBubble')

        const text = scene.make.text({
            add: false,
            x: 0,
            y: 0,
            text: bodyText,
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#ffffff',
                align: 'center',
                backgroundColor: '#ff00ff'
            }
        });

        scene.textures.addCanvas('text', text.canvas);

        box.stamp('text', null, 40, 40)


        if (side == 'left') {
            super(scene, game.config.width/2, game.config.height/2, 'box')

        } else if (side == 'right') {
            super(scene, game.config.width/2, game.config.height/2, 'box')

        } else if (side == 'center'){
            super(scene, game.config.width/2, game.config.height/2, 'box')

        } else 
            console.log('Undifined Side on Dialog Box with :' + text)

        scene.add.existing(this);
    }
}