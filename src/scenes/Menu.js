class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    startDrag() {}

    create() {
        //this.graphics = this.add.graphics();
        graphics = this.add.graphics();

        this.isDragging = false;
        stitch = this.add.line(0, 0, 0, 0, 0, 0, 0xed9bae).setOrigin(0);
        stitch.setLineWidth(2);
        stitch.visible = false;

//        this.currDot = 0;
        currDot = 0;
        finishedConnecting = false;
//        this.points = [];

//        this.testPhysicsObject = this.physics.add.body(game.config.width/2, game.config.height/2, 50,50);
        this.point1 = this.add.image(game.config.width / 2, game.config.width / 2, 'circle').setOrigin(0.5, 0.5).setInteractive();
//        this.points.push(this.point1);
        points.push(this.point1);
//        this.point1.on('pointerdown', (pointer) => {
//            this.startDrag(pointer, this.points, this.currDot, this.isDragging, this.point1);
//            if (this.points[this.currDot] != this.point1) {
//                console.log('current pointer is not point1');
//                return;
//            }
//            linePosition.x = this.points[this.currDot].x;
//            linePosition.y = this.points[this.currDot].y;
//            this.currDot = (this.currDot + 1) % this.points.length;
//            console.log('point1.x ', linePosition.x, 'point1.y', linePosition.y);
//            console.log('currloc: ', this.currDot);
//
//            stitch.setTo(this.point1.x, this.point1.y, this.point1.x, this.point1.y);
//            stitch.visible = true;
//
//            this.isDragging = true;
//        });
//        this.point1.on('pointermove', (pointer) => {
//            if (this.isDragging) {
//                //stitch.setTo(0, 0, pointer.x - linePosition.x, pointer.y - linePosition.y);
//                stitch.setTo(this.point1.x, this.point1.y, pointer.x - linePosition.x, pointer.y - linePosition.y);
//            }
//
//        });
//        this.point1.on('pointerup', () => {
//            this.isDragging = false;
//        });



        this.point2 = this.add.image(game.config.width / 4, game.config.width / 3, 'circle').setOrigin(0.5, 0.5).setInteractive();
        points.push(this.point2);
//        this.point2.on('pointerdown', () => {
//            if (this.points[this.currDot] != this.point2) {
//                console.log('current pointer is not point2');
//                return;
//            }
//             linePosition.x = this.points[this.currDot].x;
//            linePosition.y = this.points[this.currDot].y;
//            this.currDot = (this.currDot + 1) % this.points.length;
//            console.log('point2.x ', linePosition.x, 'point2.y', linePosition.y);
//            console.log('currloc: ', this.currDot);
//
//            stitch.setTo(0, 0, 0, 0);
//            stitch.visible = true;
//            this.isDragging = true;
//        });

        this.point3 = this.add.image(game.config.width / 4, game.config.width / 6, 'circle').setOrigin(0.5, 0.5).setInteractive();
        points.push(this.point3);
//        this.point3.on('pointerdown', () => {
//            if (this.points[this.currDot] != this.point3) {
//                console.log('current pointer is not point3');
//                return;
//            }
//            linePosition.x = this.points[this.currDot].x;
//            linePosition.y = this.points[this.currDot].y;
//            this.currDot = (this.currDot + 1) % this.points.length;
//            console.log('point3.x ', linePosition.x, 'point3.y', linePosition.y);
//            console.log('currloc: ', this.currDot);
//
//            stitch.setTo(0, 0, 0, 0);
//            stitch.visible = true;
//            this.isDragging = true;
//        });


//        const graphic = this.add.graphics();
//        stitch.fillStyle(0xed9bae);
//        stitch.moveTo(this.point1.x, this.point1.y);
//        stitch.beginPath();
//        stitch.lineTo(this.point2.x, this.point2.y);
//        stitch.fillPath();


//        this.line = new Phaser.Geom.Line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
//        graphic.strokeLineShape(this.line);


//        stitch.fillCircle(this.point1.x, this.point1.y, 20);
//        stitch.fillCircle(this.point2.x, this.point2.y, 20);

//        this.time.delayedCall(2000, () => {
//            this.testPhysicsObject.setCircle(25);
//        }, null, this);
//        console.log(this.points.length);
        this.input.on('pointerdown', startDrag);
        this.input.on('pointerup', endDrag);
        this.input.on('pointermove', drag);

        

        this.box = new Dialog(this, 'left', 'This is a testing text for the text box text.');
        console.log(this.box.textWidth)

        this.doneLooping = false;
    }

    update() {
        if (this.doneLooping == false && finishedConnecting == true) {
            for (let i = 0; i < connections.length; ++i) {
                console.log('connections[', i, ']: ', connections[i]);
                //this.graphics.fillCircle(connections[i].getPointB());
                graphics.lineStyle(5, 0x8bc34a);
                graphics.strokeLineShape(connections[i]);
            }
            this.doneLooping = true;
        }
    }

}

function startDrag(pointer, gameObject) {
    console.log('starting: ', currDot);
    // don't connect anymore once connected all dots
    if (finishedConnecting) {
        return;
    }

    // skip drag if clicking not on a point or not clicking on subsequent point
    if (gameObject == 0 || gameObject[0] != points[currDot]) {
        console.log('didn\'t start at point');
        return;
    }

    // set the starting of the line at the game object's x and y axis
    linePosition.x = gameObject[0].x;
    linePosition.y = gameObject[0].y;

    console.log('line x pos: ', linePosition.x, '\nline x pos: ', linePosition.y);

    stitch.x = gameObject[0].x;
    stitch.y = gameObject[0].y;
    stitch.setTo(0, 0, 0, 0).setOrigin(0);
    stitch.visible = true;

    this.isDragging = true;

    currDot = (currDot + 1) % points.length;
}

function endDrag(pointer, gameObject) {
    console.log('ending: ', currDot);
    if (finishedConnecting) {
        return;
    }

    // remove line if lets go of mouse when not clicking on a point or if lets go on a non subsequent point, starts over
    if (gameObject == 0 || points[currDot] != gameObject[0]) {
        console.log('not on point');
        console.log('currpoint: ',currDot);
        console.log('connections length: ', connections.length);

        currDot = 0;

        console.log('currpoint after update: ', currDot);

        stitch.visible = false;
        return;
    }

    console.log('gameobject.x: ', gameObject[0].x, ' gameboejct.y: ', gameObject[0].y);
    console.log('stitch.x: ', stitch.x, ' stitch.y: ', stitch.y);
    console.log('linepos.x: ', linePosition.x, ' linepos.y: ', linePosition.y);

    stitch.setTo(0, 0, gameObject[0].x - linePosition.x, gameObject[0].y - linePosition.y);

    console.log('after setting line: stitch.x :', stitch.x, 'stitch.y: ', stitch.y);

    this.isDragging = false;

    connections.push(newLine = new Phaser.Geom.Line(linePosition.x, linePosition.y, gameObject[0].x, gameObject[0].y));
    //this.graphics.lineStyle(5, 0x8bc34a);
    //this.graphics.strokeLineShape(connections[connections.length - 1]);

    console.log('pushed to connection, size: ', connections.length);
    // finished connecting when wrapped back to first point
    if (currDot == 0) {
        finishedConnecting = true;
        stitch.visible = false;
    }

    console.log('currDot loc: ', currDot, 'finished conencting: ', finishedConnecting);
}

function drag(pointer, gameObject) {
    // stop checking for mouse drag once done connecting
    if (finishedConnecting) {
        return;
    }

    console.log('dragging');

    // move the line with the mouse
    if (this.isDragging) {
        stitch.setTo(0, 0, pointer.x - linePosition.x, pointer.y - linePosition.y);
    }

}
