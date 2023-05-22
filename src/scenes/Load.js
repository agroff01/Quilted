class Load extends Phaser.Scene {
    constructor(){
        super('preLoad')
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, game.config.height/2, game.config.width * value, 10);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        this.load.image('playerBubble', './Scene1/Textbox_Temp_Player_Smol.png');
        this.load.image('grandBubble', './Scene1/Textbox_Temp_Grandma_Smol.png');
        this.load.atlas('circle', 'circle.png', 'circle.json');
        this.load.atlas('hole', 'Scene1/Fabric_Scene_1_Hole_Sheet.png', 'Scene1/Fabric_Scene_1_Hole_Sheet.json');

        this.load.bitmapFont("CraftyGirls24", "./fonts/dialog_24.png", "./fonts/dialog_24.xml");
    }

    create() {
        this.scene.start('menuScene');
    }

    
}