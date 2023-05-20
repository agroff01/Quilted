class Dialog extends Phaser.GameObjects.Sprite {
    constructor(scene, side, bodyText) {

        let boxWidth = (side == 'center' ? game.config.width : game.config.width - 100), boxHeight = game.config.height/3;

        const box = scene.textures.addDynamicTexture('box', boxWidth, boxHeight)

        box.stamp('speechBubble', null, boxWidth/2, boxHeight/2)

        // change this out for bitmapText!!!!!!!!!!!!
        
        const text = scene.make.text({
            add: false,
            text: bodyText,
            style: {
                fontSize: '64px',
                fontFamily: 'CraftyGirls24',
                color: '#ffffff',
                align: 'center',
                backgroundColor: '#ff00ff'
            }
        });

        scene.textures.addCanvas('text', text.canvas);

        box.stamp('text')


        if (side == 'left') {
            super(scene, boxWidth/2, game.config.height/2, 'box')

        } else if (side == 'right') {
            super(scene, game.config.width, game.config.height, 'box')

        } else if (side == 'center'){
            super(scene, game.config.width * 3/4, game.config.height, 'box')

        } else 
            console.log('Undifined Side on Dialog Box with :' + text)

        scene.add.existing(this);
    }
}