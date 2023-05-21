class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    create() {
        this.isDragging = false;
        line = this.add.line(0, 0, 0, 0, 0, 0, 0xed9bae).setOrigin(0);
        line.setLineWidth(2);
        line.visible = false;

        this.pointsVisited = [];

//        this.testPhysicsObject = this.physics.add.body(game.config.width/2, game.config.height/2, 50,50);
        this.point1 = this.add.image(game.config.width / 2, game.config.width / 2, 'circle').setOrigin(0.5, 0.5).setInteractive();
        this.point2 = this.add.image(game.config.width / 4, game.config.width / 3, 'circle').setOrigin(0.5, 0.5).setInteractive();
        this.point3 = this.add.image(game.config.width / 4, game.config.width / 6, 'circle').setOrigin(0.5, 0.5).setInteractive();

//        const graphic = this.add.graphics();
//        line.fillStyle(0xed9bae);
//        line.moveTo(this.point1.x, this.point1.y);
//        line.beginPath();
//        line.lineTo(this.point2.x, this.point2.y);
//        line.fillPath();


//        this.line = new Phaser.Geom.Line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
//        graphic.strokeLineShape(this.line);


//        line.fillCircle(this.point1.x, this.point1.y, 20);
//        line.fillCircle(this.point2.x, this.point2.y, 20);

//        this.time.delayedCall(2000, () => {
//            this.testPhysicsObject.setCircle(25);
//        }, null, this);
//        console.log(this.pointsVisited.length);
        this.input.on('pointerdown', startDrag);
        this.input.on('pointerup', endDrag);
        this.input.on('pointermove', drag);

    }

    update() {

    }

}
    function startDrag(pointer, gameObject) {
        // skip drag if click elsewhere
        if (gameObject == 0) {
            return;
        }

//        console.log(this.pointsVisited.length);
//        console.log(this.visited.length);

        // set the starting of the line at the game object's x and y axis
        linePosition.x = gameObject[0].x;
        linePosition.y = gameObject[0].y;

        console.log('line x pos: ', linePosition.x, '\nline x pos: ', linePosition.y);

        line.x = gameObject[0].x;
        line.y = gameObject[0].y;
        line.setTo(0, 0, 0, 0).setOrigin(0);
        line.visible = true;

        this.isDragging = true;
        //console.log(gameObject.length)
        //console.log(gameObject[0], gameObject[1]);
    }

    function endDrag(pointer, gameObject) {
        if (gameObject == 0) {
            line.visible = false;

            return;
        }

        console.log('gameobject.x: ', gameObject[0].x, ' gameboejct.y: ', gameObject[0].y);
        console.log('line.x: ', line.x, ' line.y: ', line.y);
        console.log('linepos.x: ', linePosition.x, ' linepos.y: ', linePosition.y);
        //gameObject.
//        if (pointer.x == gameObject[1].x && pointer.y == gameObject[1].y)
//        lineArray.add(line.)
        line.setTo(0, 0, gameObject[0].x - linePosition.x, gameObject[0].y - linePosition.y);
        console.log('after setting line: line.x :', line.x, 'line.y: ', line.y);
        this.isDragging = false;
    }

    function drag(pointer, gameObject) {
        if (this.isDragging) {
            line.setTo(0, 0, pointer.x - linePosition.x, pointer.y - linePosition.y);
        }

    }

