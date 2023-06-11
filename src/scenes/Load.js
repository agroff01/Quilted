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
        this.load.image('endCreditBack','./ToBeContinued/End_Credit_Scene_Fabric.png');
        this.load.image('secondMeetingBackground', './Scene2/Fabric_Scene_2.png');
        this.load.image('combinedQuilt', './ToBeContinued/To_Be_Continued_Pan_No_Text.png')

        // speech bubbles
        this.load.image('playerBubble', './Scene1/Me_Final_Speech_Bubble.png');
        this.load.image('grandBubble', './Scene1/Grandma_Final_Speech_Bubble.png');
        this.load.image('largeGrandBubble', './Scene1/Grandma_Final_Large_Box.png');
        this.load.image('grandTri', './Scene1/Grandma_Final_Triangle.png');
        this.load.image('playerTri', './Scene1/Player_Final_Triangle.png');

        // cursors
        this.load.image('blueCursor', './Scene1/Scene1Cursor.png');
        this.load.image('greenCursor', './Scene2/Scene2Cursor.png');

        // fun little snacks
        this.load.image('cookies', './Scene1/Cookie_Plate.png');
        this.load.image('lemonade', './Scene2/Lemonade_Glass.png');

        // dialog  images
        this.load.image('bike', './Scene1/Bike_Final.png');
        this.load.image('fish', './Scene2/Fishing_Rod_Final.png');

        // holes
        this.load.atlas('Scene_1_Hole', './Scene1/Fabric_Scene_1_Hole_Sheet.png', './Scene1/Fabric_Scene_1_Hole_Sheet.json');
        this.load.atlas('Scene_2_Hole', './Scene2/Fabric_Scene_2_Hole_Sheet.png', './Scene2/Fabric_Scene_2_Hole_Sheet.json');

        // fonts
        this.load.bitmapFont("CraftyGirls24", "./Fonts/dialog_26.png", "./Fonts/dialog_26.xml");

        // music
        this.load.audio('firstMeetingBGMusic', './Music/Old-oak.mp3');
    }

    create() {
        this.scene.start('menuScene');
    }

    
}