class FirstMeeting extends Phaser.Scene {
    constructor(){
        super('firstMeeting')
    }


    create() {

        this.background = this.add.image(game.config.width / 2, game.config.height / 3.9, 'firstMeetingBackground').setOrigin(0.5, 0.5).setScale(0.24);
        this.background = this.add.image(game.config.width / 2, game.config.height / 1.295, 'firstMeetingBackground').setOrigin(0.5, 0.5).setScale(0.24);
        //this.add.image(game.config.width / 2, game.config.height / 3.9, 'firstMeetingBackground').setOrigin(0.5, 0.5).setScale(0.24);
        //this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'firstMeetingBackground').setTilePosition(0, 0)//.setOrigin(0, 0).setScale(0.5);//.setScale(0.24);//(game.config.width / 2, game.config.height / 3.9, 'firstMeetingBackground').setOrigin(0.5, 0.5).setScale(0.24);

        this.puzzleIsActive = false;
        this.finishedDialog = false;

        this.graphics = this.add.graphics();

        // line graphics from point to point
        this.isDragging = false;
        this.stitch = this.add.line(0, 0, 0, 0, 0, 0, 0x8bc34a).setOrigin(0);
        this.stitch.setLineWidth(2);
        this.stitch.visible = false;
        this.linePosition = {x: 0, y:0};

        // points and lines
        this.currDot = 0;
        this.points = [];
        this.connections = [];

        this.finishedConnecting = false;

        // image choices
        this.bike;

        // point coords, even index: x coordinate, odd index: y coordinate
        this.coords = [
            460, 50,
            350, 60,
            275, 245,
            110, 275,
            160, 465,
            300, 385,
            445, 350, 
            555, 390,
            695, 485,
            795, 335,
            660, 250,
            585, 150
        ]

        // mouse input to make lines
        this.input.on('pointerdown', startDrag);
        this.input.on('pointerup', endDrag);
        this.input.on('pointermove', drag);


        this.cursors = this.input.keyboard.createCursorKeys();

        // create the dialog boxes
        this.boxBundle = new dialogBoxBundle(this, [
            ['left', "Okay, I think I got everything out of the closet. Is there anything else that you have?"],
            ['right', "It should all be in my sewing kit."],
            ['left', "Wow, this is a lot of stuff. Ms. Curry usually only has just embroidery floss and needles."],
            ['right', "I can't believe your teacher is expecting everyone to go out and buy a complete set for your project."],
            ['left', "She's not, but I figured you would have extra stuff that would make my project look good."],
            ['right', "Well, you're certainly not wrong there."],
            ['right', "I've got just about everything a seamstress could ever want or need crammed into that thing."],
            ['left', "I'll say."],
            ['end', "Intro"]
        ], true)

        this.introTextComplete = false;

        this.placedPoints = false;
        this.placedImage = false;

        this.song = this.sound.add("firstMeetingBGMusic");
        
        var musicConfig = {
            mute: false,
            volume: 0.0075,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
         }

        this.song.play(musicConfig);

        this.fadeout = null;
        this.directions = this.add.bitmapText(450, 800, "CraftyGirls24", "Click with the mouse to connect the pattern.").setOrigin(0.5).setAlpha(0);
    }

    update() { 
        // console.log(this.boxBundle.scriptFinished)
        // console.log("unusable : " + this.boxBundle.unusable)
        // if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) this.boxBundle.shiftFocus(game.config.height * 5/6)
        
        // Dialog Box Update
        this.boxBundle.update();
        if (this.boxBundle.scriptFinished === "Intro") {
            this.boxBundle.remove();
            this.boxBundle = new dialogBoxBundle(this, [
               ['right', "So, tell me a bit more about this project your teacher assigned you."],
               ['left', "It's pretty simple actually."],
               ['left', "I just need to embroider some stuff onto this quilt I've been making in class."],
               ['right', "I see. It's nice that your teacher is having you kids practice sewing in class, it is kind of becoming a lost art."],
               ['left', "It is, unfortunately, but at least I had the best teacher in the whole world."],
               ['right', " ~ Your Grandmother chuckles at your praise. ~ "],
               ['end', "Choice1"]
            ], true)
        } else if (this.boxBundle.scriptFinished === "Choice1") {
            this.boxBundle.remove();
            // INSERT TIMER SOUND EFFECT
            this.boxBundle = new dialogBoxBundle(this, [
                ['right', "Oh, now, give me just one second to get those cookies out of the oven. It'll let you get started on your project."],
                ['hide', 'right'],
                ['left', "Now what am I going to put on this quilt? Hmmm… I could just embroider something random . . ."],
                ['left', "But Ms. Curry said we needed to embroider something that has a story. How am I going to do that?"],
                ['hide', 'left'],
                ['pause', 3000],
                ['right', "I don't see you sewing."],
                ['left', "I just don't know what to make."],
                ['left', "My teacher told me we needed to embroider something that has meaning, so that we can share it with the other kids in class."],
                ['left', "But honestly, I'm a little stuck on what to do."],
                ['right', "Lots of things have stories hon, you just gotta pick one that you like."],
                ['left', "Yeah, but she said they have to be real stories, not made-up ones."],
                ['right', "Well, you could make something for our family. That's a real story."],
                ['left', "Yeah, you're right."],
                ['left', "You know what I could do, I could make something that's about you!"],
                ['right', "Well now that's sweet, are you sure you want to make it about me though?"],
                ['left', "I'm certain of it. How about you tell me a story about you and Grandpa?"],
                ['right', " *She Chuckles* I can most certainly do that. I have lots of those. Get your needle ready."],
                ['end', "Choice2"]
            ], true)
        } else if (this.boxBundle.scriptFinished === "Choice2") {
            this.boxBundle.remove()
            this.boxBundle.shiftFocus(game.config.height * 5/6);
            this.boxBundle = new dialogBoxBundle(this, [
                ['right', "Hmm… now what would be a good one to tell. . ."],
                ['right', "Oh, I know, I'll tell you about the time that we first met."],
                ['left', "Didn't you guys grow up around the corner from each other?"],
                ['right', "We were always right near each other since the school yard was across the street from my house."],
                ['right', "And all the kids from the neighborhood would play games together over there."],
                ['shift', game.config.height * 5/6],
                ['puzzle'],
                ['center', "But, the first time I encountered your grandpa was when I was riding my bike with my friend Sally."],
                ['center', "She was my neighbor, and back in those days you could just ride around everywhere all over town, so that's what we'd do."],
                ['center', "I distinctly remember that we were on our way back from downtown, and as we were biking, this kid that I'd never met before peeled out with his bike in front of us."],
                ['center', "We had to brake as quick as we could, otherwise we would have gone barreling into him. We were both scared to death of crashing, but he just left, snickering as he biked away."],
                ['center', "Sally and I couldn't believe that this kid was being such a jerk!"],
                ['center', "But I probably wouldn't remember this so well if this wasn't the start of a pattern."],
                ['center', "Every time Sally and I came biking back from downtown, your grandpa would come flying out from all different spots along the way and nearly make us crash every single time."],
                ['left', "Did he ever make you crash?"],
                ['hide', 'left'],
                ['center', "He did once actually."],
                ['center', "We were on our way back from the movies, and he misjudged how close he was to my bike."],
                ['center', "Sally saw him coming and was able to stop in time, but he turned too sharply and sent me flying over my handlebars. I got all kinds of scrapes on my arms and knees."],
                ['center', "Well, when my older brother saw me in that state, he demanded to know what had happened to me. And when I told him about your grandpa and what he had been doing, he told me to tell him the next time Sally and I wanted to go biking and he would come with us."],
                ['center', "So we did, and when your grandpa tried to peel out in front of us again, my brother got so mad at him."],
                ['center', "He told your grandpa that if he ever tried to do that again, he would kick the crap out of him."],
                ['center', "Your grandpa never tried it again."],
                ['hide', 'center'],
                ['left', "Haha! That's a great story Grandma, my class is going to think that's hilarious."],
                ['right', "I'm glad you think so, and it looks like you got some inspiration for what to embroider."],
                ['left', "I sure did!"],
                ['right', "Alright then, I'll be quiet and let you finish. Just let me know when you are done."],
                ['left', "Will do."],
                ['end', 'Storytime']
            ], true)

        } else if (this.boxBundle.scriptFinished === 'Storytime') {
            this.finishedDialog = true;
            this.time.delayedCall(3000, () => {
                this.boxBundle.remove()
                this.time.delayedCall(1500, () => {
                    this.directions.setAlpha(1);
                });
            }, null, this)
        }

        // remove all points and lines, show bike when finished 
        if (!this.placedImage && this.finishedConnecting == true) {
            for (let i = 0; i < this.connections.length; ++i) {
                this.connections[i].destroy();
            }

            for (let i = 0; i < this.points.length; ++i) {
                this.points[i].destroy();
            }

            this.bike = this.add.image(game.config.width / 2, game.config.height / 3.75, 'bike').setVisible(false).setOrigin(0.5, 0.5).setScale(0.45);

            // delay bike to initially show on screen
            this.time.delayedCall(1, () => {this.bike.setVisible(true)});

            this.tween = this.tweens.add({
                targets: this.bike,
                alpha: {from: 0, to: 1},
                ease: 'Sine.InOut',
                duration: 3000,
                onComplete: () => {this.placedImage = true;},
            });

            // this.placedImage = true;
        }

        // add points to scene
        if (!this.placedPoints && this.puzzleIsActive) {
            for (let i = 0; i < this.coords.length; i += 2) {
                if (i == 0) {
                    this.points.push(this.add.sprite(this.coords[i], this.coords[i + 1], 'hole', 'hole 1').setOrigin(0.5, 0.5).setInteractive().setScale(0.025));//.setScale(0.025));
                    continue;
                }

                this.points.push(this.add.sprite(this.coords[i], this.coords[i + 1], 'hole', 'hole 0').setOrigin(0.5, 0.5).setInteractive().setScale(0.025));
            }

            this.placedPoints = true;
        }

        // TODO: check if finished connecting lines before dialog
        // go to next scene once finished dialog and drawing 
        if (this.placedImage && this.finishedDialog) {
            // check if song is playing to stop it
            if (this.song.isPlaying) {
                this.song.stop();
            }

            if (!this.fadeout) this.fadeout = this.time.delayedCall(3000, () => {
                this.cam = this.cameras.main.fadeOut(5000, 0, 0, 0);
                this.cam.on('camerafadeoutcomplete',  () => {
                    this.scene.start('toBeContinued');
                })
            })
        }

    }

}

function startDrag(pointer, gameObject) {
    // return if puzzle isn't active
    if (!this.scene.puzzleIsActive) {
        return;
    }

    // if pointer is in the dialog area, ignore it
    if (pointer.y > 600) return 

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

    this.scene.points[this.scene.currDot].setFrame('hole 1');
    console.log('next dot: ', this.scene.points[this.scene.currDot].x, this.scene.points[this.scene.currDot].y);
}

function drag(pointer) {
    // return if puzzle isn't active
    if (!this.scene.puzzleIsActive) {
        return;
    }

    // if pointer is in the dialog area, ignore it
    if (pointer.y > 600) return 

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
    // return if puzzle isn't active
    if (!this.scene.puzzleIsActive || this.scene.finishedConnecting) {
        return;
    }

    // if pointer is in the dialog area, ignore it
    if (pointer.y > 600) return 

    console.log('ending: ', this.scene.currDot);

    // return if already finished connection
    if (this.scene.finishedConnecting) {
        return;
    }

    // remove line if lets go of mouse when not clicking on a point or if lets go on a non subsequent point, starts over
    if (gameObject == 0 || this.scene.points[this.scene.currDot] != gameObject[0]) {
        console.log('not on point');
        console.log('nextpoint.x: ', this.scene.points[this.scene.currDot].x, 'nextpoint.y: ', this.scene.points[this.scene.currDot].y);

        for (let i = 1; i < this.scene.points.length; ++i) {
            this.scene.points[i].setFrame('hole 0');
        }

        this.scene.points[0].setFrame('hole 1');

        this.scene.currDot = 0;

        this.scene.stitch.visible = false;

        console.log(this.scene.currDot);

        for (let i = 0; i < this.scene.connections.length; ++i) {
            this.scene.connections[i].destroy();
        }

        this.scene.connections = [];

        return;
    }

    this.scene.points[this.scene.currDot].setFrame('hole 2');

    console.log('gameobject.x: ', gameObject[0].x, ' gameboejct.y: ', gameObject[0].y);
    console.log('stitch.x: ', this.scene.stitch.x, ' stitch.y: ', this.scene.stitch.y);
    console.log('linepos.x: ', this.scene.linePosition.x, ' linepos.y: ', this.scene.linePosition.y);

    this.scene.stitch.setTo(0, 0, gameObject[0].x - this.scene.linePosition.x, gameObject[0].y - this.scene.linePosition.y);

    console.log('after setting line: stitch.x :', this.scene.stitch.x, 'stitch.y: ', this.scene.stitch.y);

    this.isDragging = false;

    this.scene.connections.push(new Phaser.GameObjects.Line(this.scene, 0, 0, this.scene.linePosition.x, this.scene.linePosition.y, gameObject[0].x, gameObject[0].y, 0xe20177, 1).setOrigin(0));
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