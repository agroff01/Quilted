
class FirstMeeting extends Phaser.Scene {
    constructor(){
        super('firstMeeting')
    }

    startDialog() {
        this.leftBox.show()
        this.leftBox.displaySlowText("Okay, I think I got everything out of the closet. Is there anything else that you have?", 40)
        this.time.delayedCall(8000, () => {
            this.rightBox.show()
            this.rightBox.displaySlowText("It should all be in my sewing kit.", 55)

            this.time.delayedCall(7000, () => {
                this.leftBox.displaySlowText("Wow, this is a lot of stuff. Ms. Curry usually only has just embroidery floss and needles.", 40)
                
                this.time.delayedCall(7000, () => {
                    this.rightBox.displaySlowText("I can't believe your teacher is expecting everyone to go out and buy a complete set for your project.", 55)
                    
                    this.time.delayedCall(10000, () => {
                        this.leftBox.displaySlowText("She's not, but I figured you would have extra stuff that would make my project look good.", 40)

                        this.time.delayedCall(7000, () => {
                            this.rightBox.displaySlowText("Well, you're certainly not wrong there.", 50)

                            this.time.delayedCall(4000, () => {
                                this.rightBox.displaySlowText("I've got just about everything a seamstress could ever want or need crammed into that thing.", 40)

                                this.time.delayedCall(8000, () => {
                                    this.leftBox.displaySlowText("I'll say.", 30)

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
        this.rightBox.displaySlowText("So, tell me a bit more about this project your teacher assigned you.", 55)
        this.time.delayedCall(8000, () => {
            this.leftBox.show()
            this.leftBox.displaySlowText("It's pretty simple actually.", 40)

            this.time.delayedCall(4000, () => {
                this.leftBox.displaySlowText("I just need to embroider some stuff onto this quilt I've been making in class.", 40)
                
                this.time.delayedCall(7000, () => {
                    this.rightBox.displaySlowText("I see. It's nice that your teacher is having you kids practice sewing in class, it is kind of becoming a lost art.", 55)
                    
                    this.time.delayedCall(11000, () => {
                        this.leftBox.displaySlowText("It is, unfortunately, but at least I had the best teacher in the whole world.", 40)

                        this.time.delayedCall(7000, () => {
                            this.rightBox.displaySlowText(" ~ Your Grandmother chuckles at your praise. ~ ", 40)
                            
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
        this.rightBox.displaySlowText("Oh, now, give me just one second to get those cookies out of the oven. It'll let you get started on your project.", 55)
        this.time.delayedCall(10000, () => {this.rightBox.hide()}, null,this);
        this.time.delayedCall(15000, () => {
            this.leftBox.show()
            this.leftBox.displaySlowText("Now what am I going to put on this quilt? Hmmm… I could just embroider something random . . .", 40)

            this.time.delayedCall(8000, () => {
                this.leftBox.displaySlowText("But Ms. Curry said we needed to embroider something that has a story. How am I going to do that?", 40)
                this.time.delayedCall(8000, () => {this.leftBox.hide()}, null,this);
                this.time.delayedCall(12000, () => {
                    this.rightBox.show()
                    this.rightBox.displaySlowText("I don't see you sewing.", 55)
                    
                    this.time.delayedCall(5000, () => {
                        this.leftBox.show()
                        this.leftBox.displaySlowText("I just don't know what to make.", 40)
                        this.time.delayedCall(4000, () => {
                            this.leftBox.displaySlowText("My teacher told me we needed to embroider something that has meaning, so that we can share it with the other kids in the class", 40)
                        }, null,this);
                        this.time.delayedCall(13000, () => {
                            this.leftBox.displaySlowText("but honestly, I'm a little stuck on what to do.", 40)
                        }, null,this);

                        this.time.delayedCall(18000, () => {
                            this.rightBox.displaySlowText("Lots of things have stories hon, you just gotta pick one that you like.", 55)
                            
                            this.time.delayedCall(8000, () => {
                                this.leftBox.displaySlowText("Yeah, but she said they have to be real stories, not made-up ones.", 40)

                                this.time.delayedCall(7000, () => {
                                    this.rightBox.displaySlowText("Well, you could make something for our family. That's a real story.", 55)
                                    
                                    this.time.delayedCall(8000, () => {
                                        this.leftBox.displaySlowText("Yeah, you're right.", 40)
                                        this.time.delayedCall(3000, () => {
                                            this.leftBox.displaySlowText("You know what I could do, I could make something that's about you!", 40)
                                            
                                            this.time.delayedCall(7000, () => {
                                                this.rightBox.displaySlowText("Well now that's sweet, are you sure you want to make it about me though?", 55)
                                                
                                                this.time.delayedCall(7000, () => {
                                                    this.leftBox.displaySlowText("I'm certain of it. How about you tell me a story about you and Grandpa?", 40)
                                                    
                                                    this.time.delayedCall(7000, () => {
                                                        this.rightBox.displaySlowText(" *She Chuckles* I can most certainly do that. I have lots of those. Get your needle ready.", 55)
                                                        
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
        this.rightBox.displaySlowText("Hmm… now what would be a good one to tell… oh, I know, I’ll tell you about the time that we first met.", 55)
        this.time.delayedCall(8000, () => {
            this.leftBox.show()
            this.leftBox.displaySlowText("Didn’t you guys grow up around the corner from each other?", 40)             
            this.time.delayedCall(7000, () => {
                this.rightBox.displaySlowText("We certainly did. I actually knew him when he was 7 and I was 6.", 55)
                    
                this.time.delayedCall(6000, () => {
                    this.rightBox.displaySlowText("We were always right near each other since the school yard was across the street from my house,", 50)                        
                }, null, this);
                this.time.delayedCall(13000, () => {
                    this.rightBox.displaySlowText("and all the kids from the neighborhood would play games together over there.", 50)                        
                }, null, this);
                this.time.delayedCall(20000, () => {
                    this.rightBox.displaySlowText("But, the first time I encountered your grandpa was when I was riding my bike with my friend Sally.", 50)                        
                }, null, this);
                this.time.delayedCall(27000, () => {
                    this.leftBox.hide()
                    // display the puzzle
                    this.puzzleIsActive = true;
                    this.rightBox.displaySlowText("She was my neighbor, and back in those days you could just ride around everywhere all over town, so that’s what we’d do.", 50)

                    this.time.delayedCall(10000, () => {
                        this.rightBox.displaySlowText("I distinctly remember that we were on our way back from downtown,", 50)                        
                    }, null, this);
                    this.time.delayedCall(15000, () => {
                        this.rightBox.displaySlowText("And as we were biking, this kid that I’d never met before peeled out with his bike in front of us.", 50)                        
                    }, null, this);
                    this.time.delayedCall(22000, () => {
                        this.rightBox.displaySlowText("We had to brake as quick as we could, otherwise we would have gone barreling into him.", 50)                        
                    }, null, this);
                    this.time.delayedCall(29000, () => {
                        this.rightBox.displaySlowText("We were both scared to death of crashing, but he just left, snickering as he biked away.", 50)                        
                    }, null, this);
                    this.time.delayedCall(36000, () => {
                        this.rightBox.displaySlowText("Sally and I couldn’t believe that this kid was being such a jerk,", 50)                        
                    }, null, this);
                    this.time.delayedCall(42000, () => {
                        this.rightBox.displaySlowText("But I probably wouldn’t remember this so well if this wasn’t the start of a pattern.", 50)                        
                    }, null, this);
                    this.time.delayedCall(49000, () => {
                        this.rightBox.displaySlowText("Every time Sally and I came biking back from downtown, your grandpa would come flying out from all different spots along the way and nearly make us crash every single time.", 50)                        
                    }, null, this);
                    this.time.delayedCall(60000, () => {
                        this.leftBox.show()
                        this.leftBox.displaySlowText("Did he ever make you crash?", 40)
                        
                        this.time.delayedCall(6000, () => {
                            this.rightBox.displaySlowText("He did once actually.", 50)                        
                        }, null, this);
                        this.time.delayedCall(10000, () => {
                            this.rightBox.displaySlowText("We were on our way back from the movies, and he misjudged how close he was to my bike.", 50)                        
                        }, null, this);
                        this.time.delayedCall(18000, () => {
                            this.rightBox.displaySlowText("Sally saw him coming and was able to stop in time, but he turned too sharply and sent me flying over my handlebars.", 50)                        
                        }, null, this);
                        this.time.delayedCall(26000, () => {
                            this.rightBox.displaySlowText("I got all kinds of scrapes on my arms and knees.", 50)                        
                        }, null, this);
                        this.time.delayedCall(31000, () => {
                            this.leftBox.hide()
                            this.rightBox.displaySlowText("Well, when my older brother saw me in that state, he demanded to know what had happened to me", 50)                        
                        }, null, this);
                        this.time.delayedCall(39000, () => {
                            this.rightBox.displaySlowText("And when I told him about your grandpa and what he had been doing,", 50)                        
                        }, null, this);
                        this.time.delayedCall(45000, () => {
                            this.rightBox.displaySlowText("He told me to tell him the next time Sally and I wanted to go biking and he would come with us.", 50)                        
                        }, null, this);
                        this.time.delayedCall(53000, () => {
                            this.rightBox.displaySlowText(" So we did, and when your grandpa tried to peel out in front of us again,", 50)                        
                        }, null, this);
                        this.time.delayedCall(58000, () => {
                            this.rightBox.displaySlowText("My brother got so mad at him.", 50)                        
                        }, null, this);
                        this.time.delayedCall(62000, () => {
                            this.rightBox.displaySlowText("He told your grandpa that if he ever tried to do that again, he would kick the shit out of him.", 50)                        
                        }, null, this);
                        this.time.delayedCall(68000, () => {
                            this.rightBox.displaySlowText("Your grandpa never tried it again.", 50)                        
                        }, null, this);
                        this.time.delayedCall(73000, () => {
                            this.leftBox.show()
                            this.leftBox.displaySlowText("Haha! That’s a great story Grandma, my class is going to think that’s a funny story.", 40)
                            
                            this.time.delayedCall(8000, () => {
                                this.rightBox.displaySlowText("I’m glad you think so, and it looks like you got some inspiration for what to embroider.", 50)  
                                
                                this.time.delayedCall(7000, () => {
                                    this.leftBox.displaySlowText("I sure did!", 30)    
                                    
                                    this.time.delayedCall(4000, () => {
                                        this.rightBox.displaySlowText("Alright then, I’ll be quiet and let you finish. Just let me know when you are done", 50)
                                        
                                        this.time.delayedCall(7000, () => {
                                            this.leftBox.displaySlowText("Will do.", 50)      
                                            
                                            this.time.delayedCall(4000, () => {
                                                this.leftBox.hide();
                                                this.rightBox.hide();
                
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

        this.leftBox = new Dialog(this, 'left');
        this.rightBox = new Dialog(this, 'right');
        this.leftBox.hide();
        this.rightBox.hide();
        this.startDialog();

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