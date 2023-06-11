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
        this.load.audio('firstMeetingBGMusic', ['./Music/Old-oak.mp3', './Music/Old-oak.wav', './Music/Old-oak.ogg']);

        // sfx
        this.load.audio('open_kit', ['./Music/open_kit.ogg', './Music/open_kit.wav', './Music/open_kit.mp3']);
        this.load.audio('steps', ['./Music/steps.ogg', './Music/steps.wav', './Music/steps.mp3']);
        this.load.audio('sigh', ['./Music/sigh.ogg', './Music/sigh.wav', './Music/sigh.mp3']);
        this.load.audio('thinking', ['./Music/thinking.ogg', './Music/thinking.wav', './Music/thinking.mp3']);
        this.load.audio('ding', ['./Music/ding.ogg', './Music/ding.wav', './Music/ding.mp3']);
        this.load.audio('grandma_chuckle', ['./Music/grandma_chuckle.ogg', './Music/grandma_chuckle.wav', './Music/grandma_chuckle.mp3']);
        this.load.audio('fabric_swoosh', ['./Music/fabric_swoosh.ogg', './Music/fabric_swoosh.wav', './Music/fabric_swoosh.mp3']);
        this.load.audio('glass_clink', ['./Music/glass_clink.ogg', './Music/glass_clink.wav', './Music/glass_clink.mp3']);
        this.load.audio('glass_down', ['./Music/glass_down.ogg', './Music/glass_down.wav', './Music/glass_down.mp3']);
        this.load.audio('door_close', ['./Music/door_close.ogg', './Music/door_close.wav', './Music/door_close.mp3']);

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
        this.load.atlas('hole', './Scene1/Fabric_Scene_1_Hole_Sheet.png', './Scene1/Fabric_Scene_1_Hole_Sheet.json');

        // fonts
        this.load.bitmapFont("CraftyGirls24", "Fonts/dialog_26.png", "Fonts/dialog_26.xml");

   }

    create() {
            this.scene.start('menuScene');
    }

    
}