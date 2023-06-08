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

        // backgrounds
        this.load.atlas('menuBackground', './Title/Title_Screen_Anim.png', './Title/Title_Screen_Anim.json');
        this.load.image('title', './Title/Quilted_Title.png');
        this.load.image('firstMeetingBackground', './Scene1/Fabric_Scene_1.png');

        // speech bubbles
        this.load.image('playerBubble', './Scene1/Me_Final_Speech_Bubble.png');
        this.load.image('grandBubble', './Scene1/Textbox_Temp_Grandma_Smol.png');
        this.load.image('largeGrandBubble', './Scene1/Large_Grandma_Textbox_Temp.png');
        this.load.image('grandTri', './Scene1/GrandmaTriangle.png');
        this.load.image('playerTri', './Scene1/PlayerTriangle.png');


        // dialog  images
        this.load.image('bike', './Scene1/Bike_Final.png');

        // holes
        this.load.atlas('hole', './Scene1/Fabric_Scene_1_Hole_Sheet.png', './Scene1/Fabric_Scene_1_Hole_Sheet.json');

        // fonts
        this.load.bitmapFont("CraftyGirls24", "./Fonts/dialog_26.png", "./Fonts/dialog_26.xml");

        // music
        this.load.audio('firstMeetingBGMusic', './Music/Old-oak.mp3');
    }

    create() {
        this.scene.start('menuScene');
    }

    
}