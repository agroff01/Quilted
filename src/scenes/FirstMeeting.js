class FirstMeeting extends Phaser.Scene {
    constructor(){
        super('firstMeeting')
    }

    create() {
        this.graphics = this.add.graphics();

        // line graphics from point to point
        this.isDragging = false;
        this.stitch = this.add.line(0, 0, 0, 0, 0, 0, 0xed9bae).setOrigin(0);
        this.stitch.setLineWidth(2);
        this.stitch.visible = false;
        this.linePosition = {x: 0, y:0};

        // points and lines
        this.currDot = 0;
        this.points = [];
        this.connections = [];

        this.finishedConnecting = false;

        // points
        this.point1 = this.add.sprite(game.config.width / 2, game.config.width / 2, 'circle', 'circle 2').setOrigin(0.5, 0.5).setInteractive();//this.add.image(game.config.width / 2, game.config.width / 2, 'circle').setOrigin(0.5, 0.5).setInteractive();
        this.points.push(this.point1);

        this.point2 = this.add.sprite(game.config.width / 4, game.config.width / 3, 'circle', 0).setOrigin(0.5, 0.5).setInteractive();
        this.points.push(this.point2);

        this.point3 = this.add.sprite(game.config.width / 4, game.config.width / 6, 'circle', 0).setOrigin(0.5, 0.5).setInteractive();
        this.points.push(this.point3);

        // mouse input to make lines
        this.input.on('pointerdown', startDrag);
        this.input.on('pointerup', endDrag);
        this.input.on('pointermove', drag);

        this.box = new Dialog(this, 'left', 'This is a testing text for the text box text.');
        console.log(this.box.textWidth)

    }

    update() { 
        if (this.finishedConnecting == true) {
            this.scene.start('scene2');
        }
    }

}

function startDrag(pointer, gameObject) {
    console.log('starting: ', this.scene.currDot);
    // don't connect anymore once connected all dots
    if (this.scene.finishedConnecting) {
        return;
    }

    // skip drag if clicking not on a point or not clicking on subsequent point
    if (gameObject == 0 || gameObject[0] != this.scene.points[this.scene.currDot]) {
        console.log('didn\'t start at point');
        return;
    }

    this.scene.points[this.scene.currDot].setFrame('circle 1');

    // set the starting of the line at the game object's x and y axis
    this.scene.linePosition.x = gameObject[0].x;
    this.scene.linePosition.y = gameObject[0].y;

    console.log('line x pos: ', this.scene.linePosition.x, '\nline x pos: ', this.scene.linePosition.y);

    this.scene.stitch.x = gameObject[0].x;
    this.scene.stitch.y = gameObject[0].y;
    this.scene.stitch.setTo(0, 0, 0, 0).setOrigin(0);
    this.scene.stitch.visible = true;

    this.isDragging = true;

    this.scene.currDot = (this.scene.currDot + 1) % this.scene.points.length;

    this.scene.points[this.scene.currDot].setFrame('circle 2');
}

function drag(pointer) {
    // stop checking for mouse drag once done connecting
    if (this.scene.finishedConnecting) {
        return;
    }

    console.log('dragging');

    // move the line with the mouse
    if (this.isDragging) {
        this.scene.stitch.setTo(0, 0, pointer.x - this.scene.linePosition.x, pointer.y - this.scene.linePosition.y);
    }
}

function endDrag(pointer, gameObject) {
    console.log('ending: ', this.scene.currDot);
    if (this.scene.finishedConnecting) {
        return;
    }

    // remove line if lets go of mouse when not clicking on a point or if lets go on a non subsequent point, starts over
    if (gameObject == 0 || this.scene.points[this.scene.currDot] != gameObject[0]) {
        console.log('not on point');

        this.scene.points[this.scene.currDot].setFrame('circle 1');
        this.scene.points[0].setFrame('circle 2');

        this.scene.currDot = 0;

        this.scene.stitch.visible = false;

        console.log(this.scene.currDot);

        for (let i = 0; i < this.scene.connections.length; ++i) {
           // this.scene.points[i].setFrame('circle 1');
            this.scene.connections[i].destroy();
        }

        this.scene.connections = [];

        return;
    }

    console.log('gameobject.x: ', gameObject[0].x, ' gameboejct.y: ', gameObject[0].y);
    console.log('stitch.x: ', this.scene.stitch.x, ' stitch.y: ', this.scene.stitch.y);
    console.log('linepos.x: ', this.scene.linePosition.x, ' linepos.y: ', this.scene.linePosition.y);

    this.scene.stitch.setTo(0, 0, gameObject[0].x - this.scene.linePosition.x, gameObject[0].y - this.scene.linePosition.y);

    console.log('after setting line: stitch.x :', this.scene.stitch.x, 'stitch.y: ', this.scene.stitch.y);

    this.isDragging = false;

    this.scene.connections.push(new Phaser.GameObjects.Line(this.scene, 0, 0, this.scene.linePosition.x, this.scene.linePosition.y, gameObject[0].x, gameObject[0].y, 0x8bc34a, 1).setOrigin(0));
    this.scene.add.existing(this.scene.connections[this.scene.connections.length - 1]) 

    // this also works
    //let newline = this.scene.add.line(0, 0, linePosition.x, linePosition.y, gameObject[0].x, gameObject[0].y, 0x8bc34a, 1).setOrigin(0);
    //this.scene.connections.push(newline);

    console.log('pushed to connection, size: ', this.scene.connections.length);

    // finished connecting when wrapped back to first point
    if (this.scene.currDot == 0) {
        this.scene.finishedConnecting = true;
    }

    this.scene.stitch.visible = false;

    console.log('currDot loc: ', this.scene.currDot, 'finished connecting: ', this.scene.finishedConnecting);
}