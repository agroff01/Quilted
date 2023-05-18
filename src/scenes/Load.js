class Load extends Phaser.Scene {
    constructor(){
        super('preLoad')
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('dialogBox', 'speechbubble.png')
    }
}