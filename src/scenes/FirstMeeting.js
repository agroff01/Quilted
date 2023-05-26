class FirstMeeting extends Phaser.Scene {
    constructor(){
        super('firstMeeting')
    }

    startDialog() {
        this.leftBox.show()
        this.leftBox.addText("Okay, I think I got everything out of the closet. Is there anything else that you have?")
        this.time.delayedCall(8000, () => {
            this.rightBox.show()
            this.rightBox.addText("It should all be in my sewing kit.")

            this.time.delayedCall(7000, () => {
                this.leftBox.addText("Wow, this is a lot of stuff. Ms. Curry usually only has just embroidery floss and needles.")
                
                this.time.delayedCall(7000, () => {
                    this.rightBox.addText("I can't believe your teacher is expecting everyone to go out and buy a complete set for your project.")
                    
                    this.time.delayedCall(10000, () => {
                        this.leftBox.addText("She's not, but I figured you would have extra stuff that would make my project look good.")

                        this.time.delayedCall(7000, () => {
                            this.rightBox.addText("Well, you're certainly not wrong there.")

                            this.time.delayedCall(4000, () => {
                                this.rightBox.addText("I've got just about everything a seamstress could ever want or need crammed into that thing.")

                                this.time.delayedCall(8000, () => {
                                    this.leftBox.addText("I'll say.")

                                    this.time.delayedCall(6000, () => {
                                        this.leftBox.hide();
                                        this.rightBox.hide();

                                        this.time.delayedCall(10000, () => {
                                            this.dialogChoice1();
                                        }, null, this);
                                    }, null, this);
                                }, null, this);
                            }, null, this);
                        }, null, this);
                    }, null, this);
                }, null, this);
            }, null, this);
        }, null, this);
    }

    dialogChoice1() {
        this.rightBox.show();
        this.rightBox.addText("So, tell me a bit more about this project your teacher assigned you.")
        this.time.delayedCall(8000, () => {
            this.leftBox.show()
            this.leftBox.addText("It's pretty simple actually.")

            this.time.delayedCall(4000, () => {
                this.leftBox.addText("I just need to embroider some stuff onto this quilt I've been making in class.")
                
                this.time.delayedCall(7000, () => {
                    this.rightBox.addText("I see. It's nice that your teacher is having you kids practice sewing in class, it is kind of becoming a lost art.", 55)
                    
                    this.time.delayedCall(11000, () => {
                        this.leftBox.addText("It is, unfortunately, but at least I had the best teacher in the whole world.")

                        this.time.delayedCall(7000, () => {
                            this.rightBox.addText(" ~ Your Grandmother chuckles at your praise. ~ ")
                            
                            this.time.delayedCall(4000, () => {
                                this.leftBox.hide();
                                this.rightBox.hide();

                                this.time.delayedCall(5000, () => {
                                    this.dialogChoice2();
                                }, null, this);
                            }, null, this);
                        }, null, this);
                    }, null, this);
                }, null, this);
            }, null, this);
        }, null, this);
    }

    dialogChoice2(){
        this.rightBox.show();
        this.rightBox.addText("Oh, now, give me just one second to get those cookies out of the oven. It'll let you get started on your project.")
        this.time.delayedCall(10000, () => {this.rightBox.hide()}, null,this);
        this.time.delayedCall(15000, () => {
            this.leftBox.show()
            this.leftBox.addText("Now what am I going to put on this quilt? Hmmm… I could just embroider something random . . .")

            this.time.delayedCall(8000, () => {
                this.leftBox.addText("But Ms. Curry said we needed to embroider something that has a story. How am I going to do that?")
                this.time.delayedCall(8000, () => {this.leftBox.hide()}, null,this);
                this.time.delayedCall(12000, () => {
                    this.rightBox.show()
                    this.rightBox.addText("I don't see you sewing.", 55)
                    
                    this.time.delayedCall(5000, () => {
                        this.leftBox.show()
                        this.leftBox.addText("I just don't know what to make.")
                        this.time.delayedCall(4000, () => {
                            this.leftBox.addText("My teacher told me we needed to embroider something that has meaning, so that we can share it with the other kids in the class")
                        }, null,this);
                        this.time.delayedCall(13000, () => {
                            this.leftBox.addText("but honestly, I'm a little stuck on what to do.")
                        }, null,this);

                        this.time.delayedCall(18000, () => {
                            this.rightBox.addText("Lots of things have stories hon, you just gotta pick one that you like.")
                            
                            this.time.delayedCall(8000, () => {
                                this.leftBox.addText("Yeah, but she said they have to be real stories, not made-up ones.")

                                this.time.delayedCall(7000, () => {
                                    this.rightBox.addText("Well, you could make something for our family. That's a real story.")
                                    
                                    this.time.delayedCall(8000, () => {
                                        this.leftBox.addText("Yeah, you're right.")
                                        this.time.delayedCall(3000, () => {
                                            this.leftBox.addText("You know what I could do, I could make something that's about you!")
                                            
                                            this.time.delayedCall(7000, () => {
                                                this.rightBox.addText("Well now that's sweet, are you sure you want to make it about me though?")
                                                
                                                this.time.delayedCall(7000, () => {
                                                    this.leftBox.addText("I'm certain of it. How about you tell me a story about you and Grandpa?")
                                                    
                                                    this.time.delayedCall(7000, () => {
                                                        this.rightBox.addText(" *She Chuckles* I can most certainly do that. I have lots of those. Get your needle ready.")
                                                        
                                                        this.time.delayedCall(7000, () => {
                                                            this.leftBox.hide();
                                                            this.rightBox.hide();
                            
                                                            this.time.delayedCall(2000, () => {
                                                                this.dialogStory();
                                                            }, null, this);
                                                        }, null, this);
                                                    }, null,this);
                                                }, null,this);
                                            }, null,this);
                                        }, null,this);
                                    }, null,this);
                                }, null,this);
                            }, null,this);
                        }, null, this);
                    }, null, this);
                }, null, this);
            }, null, this);
        }, null, this);        
    }

    dialogStory() {
        this.rightBox.show();
        this.rightBox.addText("Hmm… now what would be a good one to tell… oh, I know, I'll tell you about the time that we first met.")
        this.time.delayedCall(8000, () => {
            this.leftBox.show()
            this.leftBox.addText("Didn't you guys grow up around the corner from each other?")             
            this.time.delayedCall(7000, () => {
                this.rightBox.addText("We certainly did. I actually knew him when he was 7 and I was 6.")
                    
                this.time.delayedCall(6000, () => {
                    this.rightBox.addText("We were always right near each other since the school yard was across the street from my house,")                        
                }, null, this);
                this.time.delayedCall(13000, () => {
                    this.rightBox.addText("and all the kids from the neighborhood would play games together over there.")                        
                }, null, this);
                this.time.delayedCall(20000, () => {
                    this.rightBox.addText("But, the first time I encountered your grandpa was when I was riding my bike with my friend Sally.")                        
                }, null, this);
                this.time.delayedCall(27000, () => {
                    this.leftBox.hide()
                    // display the puzzle
                    this.puzzleIsActive = true;
                    this.rightBox.addText("She was my neighbor, and back in those days you could just ride around everywhere all over town, so that's what we'd do.")

                    this.time.delayedCall(10000, () => {
                        this.rightBox.addText("I distinctly remember that we were on our way back from downtown,")                        
                    }, null, this);
                    this.time.delayedCall(15000, () => {
                        this.rightBox.addText("And as we were biking, this kid that I'd never met before peeled out with his bike in front of us.")                        
                    }, null, this);
                    this.time.delayedCall(22000, () => {
                        this.rightBox.addText("We had to brake as quick as we could, otherwise we would have gone barreling into him.")                        
                    }, null, this);
                    this.time.delayedCall(29000, () => {
                        this.rightBox.addText("We were both scared to death of crashing, but he just left, snickering as he biked away.")                        
                    }, null, this);
                    this.time.delayedCall(36000, () => {
                        this.rightBox.addText("Sally and I couldn't believe that this kid was being such a jerk,")                        
                    }, null, this);
                    this.time.delayedCall(42000, () => {
                        this.rightBox.addText("But I probably wouldn't remember this so well if this wasn't the start of a pattern.")                        
                    }, null, this);
                    this.time.delayedCall(49000, () => {
                        this.rightBox.addText("Every time Sally and I came biking back from downtown, your grandpa would come flying out from all different spots along the way and nearly make us crash every single time.")                        
                    }, null, this);
                    this.time.delayedCall(60000, () => {
                        this.leftBox.show()
                        this.leftBox.addText("Did he ever make you crash?")
                        
                        this.time.delayedCall(6000, () => {
                            this.rightBox.addText("He did once actually.")                        
                        }, null, this);
                        this.time.delayedCall(10000, () => {
                            this.rightBox.addText("We were on our way back from the movies, and he misjudged how close he was to my bike.")                        
                        }, null, this);
                        this.time.delayedCall(18000, () => {
                            this.rightBox.addText("Sally saw him coming and was able to stop in time, but he turned too sharply and sent me flying over my handlebars.")                        
                        }, null, this);
                        this.time.delayedCall(26000, () => {
                            this.rightBox.addText("I got all kinds of scrapes on my arms and knees.")                        
                        }, null, this);
                        this.time.delayedCall(31000, () => {
                            this.leftBox.hide()
                            this.rightBox.addText("Well, when my older brother saw me in that state, he demanded to know what had happened to me")                        
                        }, null, this);
                        this.time.delayedCall(39000, () => {
                            this.rightBox.addText("And when I told him about your grandpa and what he had been doing,")                        
                        }, null, this);
                        this.time.delayedCall(45000, () => {
                            this.rightBox.addText("He told me to tell him the next time Sally and I wanted to go biking and he would come with us.")                        
                        }, null, this);
                        this.time.delayedCall(53000, () => {
                            this.rightBox.addText(" So we did, and when your grandpa tried to peel out in front of us again,")                        
                        }, null, this);
                        this.time.delayedCall(58000, () => {
                            this.rightBox.addText("My brother got so mad at him.")                        
                        }, null, this);
                        this.time.delayedCall(62000, () => {
                            this.rightBox.addText("He told your grandpa that if he ever tried to do that again, he would kick the shit out of him.")                        
                        }, null, this);
                        this.time.delayedCall(70000, () => {
                            this.rightBox.addText("Your grandpa never tried it again.")                        
                        }, null, this);
                        this.time.delayedCall(75000, () => {
                            this.leftBox.show()
                            this.leftBox.addText("Haha! That's a great story Grandma, my class is going to think that's a funny story.")
                            
                            this.time.delayedCall(8000, () => {
                                this.rightBox.addText("I'm glad you think so, and it looks like you got some inspiration for what to embroider.")  
                                
                                this.time.delayedCall(7000, () => {
                                    this.leftBox.addText("I sure did!")    
                                    
                                    this.time.delayedCall(4000, () => {
                                        this.rightBox.addText("Alright then, I'll be quiet and let you finish. Just let me know when you are done")
                                        
                                        this.time.delayedCall(7000, () => {
                                            this.leftBox.addText("Will do.")      
                                            
                                            this.time.delayedCall(4000, () => {
                                                this.leftBox.hide();
                                                this.rightBox.hide();

                                                this.finishedDialog = true;
                
                                            }, null, this);
                                        }, null, this);
                                    }, null, this);
                                }, null, this);
                            }, null, this);
                        }, null, this);
                    }, null, this);
                }, null, this);

            }, null, this);
        }, null, this);
    }

    create() {

        this.background = this.add.tileSprite(0, 0, 900, 1000, 'firstMeetingBackground').setOrigin(0);

        

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


        // create the dialog boxes
        this.leftBox = new Dialog(this, 'left', '', true, 25);
        this.rightBox = new Dialog(this, 'right', '', true, 40);
        this.centerBox = new Dialog(this, 'center', '', true, 30);
        this.centerBox.hide();
        this.leftBox.hide();
        this.rightBox.hide();
        //this.startDialog();
        this.dialogStory();

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
    }

    update() { 
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
        // FIXME: song keeps playing even when stopping it, second if statement checking the song is playing is false, but song still plays
        // go to next scene once finished dialog and drawing 
        if (this.placedImage && this.finishedDialog) {
            // check if song is playing to stop it
            if (this.song.isPlaying) {
                console.log('song is playing');
                this.song.stop();
                console.log('stopped song');
            }

            //this.song.setVolume(0);
            //this.sound.get('firstMeetingBGMusic').stop();
            //this.song.setMute(true);
            console.log('everything done');

            if (this.song.isPlaying) {
                console.log('song is still playing');
            }

            this.time.delayedCall(3000, () => {this.scene.start('scene2');})
        }

    }

}

function startDrag(pointer, gameObject) {
    // return if puzzle isn't active
    if (!this.scene.puzzleIsActive) {
        return;
    }

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