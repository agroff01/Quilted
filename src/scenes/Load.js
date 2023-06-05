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

        // music
        this.load.audio('firstMeetingBGMusic', ['./Music/Old-oak.ogg', './Music/Old-oak.wav', './Music/Old-oak.mp3']);

        // sfx
        this.load.audio('steps', ['./Music/steps.ogg', './Music/steps.wav', './Music/steps.mp3']);
        this.load.audio('sigh', ['./Music/sigh.ogg', './Music/sigh.wav', './Music/sigh.mp3']);
        this.load.audio('thinking', ['./Music/thinking.ogg', './Music/thinking.wav', './Music/thinking.mp3']);
        this.load.audio('ding', ['./Music/ding.ogg', './Music/ding.wav', './Music/ding.mp3']);
        this.load.audio('grandma_chuckle', ['./Music/grandma_chuckle.ogg', './Music/grandma_chuckle.wav', './Music/grandma_chuckle.mp3']);

        // backgrounds
        this.load.image('firstMeetingBackground', './Scene1/Fabric_Scene_1.png');

        // speech bubbles
        this.load.image('playerBubble', './Scene1/Textbox_Temp_Player_Smol.png');
        this.load.image('grandBubble', './Scene1/Textbox_Temp_Grandma_Smol.png');
        this.load.image('largeGrandBubble', './Scene1/Large_Grandma_Textbox_Temp.png');
        this.load.image('grandTri', './Scene1/GrandmaTriangle.png');
        this.load.image('playerTri', './Scene1/PlayerTriangle.png');


        // dialog choice images
        this.load.image('bike', './Scene1/Bike_Temp.png');

        // holes
        this.load.atlas('circle', 'circle.png', 'circle.json');
        this.load.atlas('hole', './Scene1/Fabric_Scene_1_Hole_Sheet.png', './Scene1/Fabric_Scene_1_Hole_Sheet.json');

        // fonts
        this.load.bitmapFont("CraftyGirls24", "./Fonts/dialog_26.png", "./Fonts/dialog_26.xml");

   }

    create() {
            this.scene.start('menuScene');
    }

    
}