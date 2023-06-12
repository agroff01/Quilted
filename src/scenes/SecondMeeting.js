class SecondMeeting extends Phaser.Scene {
    constructor(){
        super('secondMeeting')
    }


    create() {

        this.cam = this.cameras.main.fadeIn(1000, 0, 0, 0);

        /*var musicConfig = {
            mute: false,
            volume: 0.5,
            //volume: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }

        this.song = this.sound.add("firstMeetingBGMusic");
        this.song.play(musicConfig);*/

        this.background = this.add.image(game.config.width / 2, game.config.height / 3.9, 'secondMeetingBackground').setOrigin(0.5, 0.5).setScale(0.24);
        this.background = this.add.image(game.config.width / 2, game.config.height / 1.295, 'secondMeetingBackground').setOrigin(0.5, 0.5).setScale(0.24);
        
        this.puzzleIsActive = false;
        this.finishedDialog = false;

        this.graphics = this.add.graphics();

        // line graphics from point to point
        this.isDragging = false;
        this.stitchColor = 0x98b55a;
        this.stitch = this.add.line(0, 0, 0, 0, 0, 0, this.stitchColor).setOrigin(0);
        this.stitch.setLineWidth(2);
        this.stitch.visible = false;
        this.linePosition = {x: 0, y:0};

        // points and lines
        this.currDot = 0;
        this.points = [];
        this.connections = [];
        this.numPointsRemoval = 2;
        this.touchedNothing = false;
 
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
            ['right', "Ah, well look who it is!"],
            ['left', "Hey Grandma! It's great to see you."],
            ['right', "Well don't just stand out there in that heat, I've got the air on."],
            ['left', "Coming!"],
            //['pause', 2500],
            ['right', "I'm guessing your school is finally out, since you made your way out here to see little old me?"],
            ['left', "Yeah, we just finished a week ago."],
            ['right', "I swear they keep you kids in school longer each year."],
            ['right', "When I was young, we used to start clear at the end of September,"],
            ['right', "but now it seems like these days they make you start in early August and don't let you out until late June."],
            ['left', "I'm just glad I don't have to go back to middle school anymore. That place was awful."],
            ['right', "Middle school can be tough, that's for sure."],
            ['right', "I think you will have much more fun in high school."],
            ['hide', 'left'],
            ['hide', 'right'],
            //['pause', 3000],
            ['end', "Intro"]
        ], true);

        this.introTextComplete = false;

        this.placedPoints = false;
        this.placedImage = false;
        this.finishedPlacedImage = false;

        this.addedHelp = false;

        this.fadeout = null;
        this.directions = this.add.bitmapText(450, 800, "CraftyGirls24", "Click with the mouse to connect the pattern.").setOrigin(0.5).setAlpha(0);
    }

    update() { 
        // Dialog Box Update
        this.boxBundle.update();
        if (this.boxBundle.scriptFinished === "Intro") {
            this.boxBundle.remove(true);
            this.boxBundle = new dialogBoxBundle(this, [
               ['right', "Would you like anything to drink dear? I've got fresh lemonade that I just made,"],
               ['right', "but I can also make iced tea, or cucumber water, or whatever you'd like."],
               ['left', "Ooo, lemonade sounds great!"],
               ['right', "You've got it!"],
               ['pause', 1000],
               ['image', 0, 0, 'lemonade', .3],
               ['right', "So, when are you going to tell me about that bundle you are carrying around."],
               ['left', "Oh, I almost forgot! I brought back my embroidery project from my home economics class."],
               ['right', "Was that the one you were working on during winter break?"],
               ['left', "Sure was! Although, we kind of started working on other sewing techniques, so there's only one panel on here that's embroidered,"],
               ['left', "but at least the actual patches of the quilt are finished."],
               ['right', "Wow, I see. That looks great, hon."],
               ['left', "Ehh, I feel like it looks kind of plain with just the one panel. Which is actually what I wanted to talk to you about."],
               ['right', "Oh?"],
               ['left', "See, when we were finishing up class, Ms. Curry told us that we should keep working on our projects over the summer if we want to improve our skills."],
               ['left', "I know I'm already pretty good at embroidery, but after embroidering that bike… I don't know… "],
               ['left', "I just had this thought. Like, what if I continue making panels, but in the same way as I made them before."],
               ['right', "How do you mean?"],
               ['left', "I don't know, but there was something really magical about sitting in this cabin and embroidering how you taught me when I was little."],
               ['left', "I got to learn more about you and Grandpa, and I must say it's really sweet hearing about your love story. I guess I just want to do it again,"],
               ['left', "but instead of just making one panel for a class project, I want to make lots of them."],
               ['left', "And, I want them all to be from stories about you and Grandpa, just like my bike."],
               ['right', "Oh! Well, that's sweet of you dear. Not many kids your age would think of doing anything sentimental like that, but I think it's a wonderful idea."],
               ['left', "Really?"],
               ['right', "Why certainly! If you want, we can start right now."],
               ['left', "That would be great!"],
               ['shift', game.config.height * 5/6],
               ['right', "Alright then, let me think… what's a good story to tell..."],
               ['left', "Got any summer ones?"],
               ['right', "As a matter of a fact, I do. I can tell you about the time I took your grandpa fishing."],
               ['end', "more stories!"]
            ], true)
        } else if (this.boxBundle.scriptFinished === "more stories!") {
            this.boxBundle.remove(true);
            this.boxBundle = new dialogBoxBundle(this, [
                ['puzzle'],
                ['left', "Didn't you used to go hunting and stuff too?"],
                ['right', "I did as a matter of fact. I used to hunt a lot of ducks,"],
                ['right', "and I would go bass fishing in the summer, but your grandpa was an entirely different story."],
                ['center', "He played all the sports in school, but he was totally clueless when it came to any outdoor sports like that. I distinctly remember there had been a lot of rain that spring, and the Sacramento River was swelling up real high."],
                ['center', "When that happened, people usually parked their boats in the nearby channels, which were not too far from my house."],
                ['center', "Now, I myself did not have a boat, but in those days, people wouldn't actually lock their boats when they tied them to the docks, so all I had to do was unbolt the chain. And bam, I had a boat."],
                
                ['shift', 'right', (game.config.height / 2) - 30],
                ['shift', 'left', (game.config.height / 2) - 30],
                ['left', "You would steal boats?"],
                ['right', "No, not steal them. I just borrowed them when I knew people wouldn't miss them."],
                ['left', "Haha, I never knew you were so crazy when you were young."],
                ['right', "That's not even half of it, hon. But, back to the story."],
                ['shift', game.config.height * 5/6],
                ['hide', 'left'],
                ['hide', 'right'],
                ['shift', game.config.height * 5/6],

                ['center', "Your grandpa and I had just started dating, so we were about your age, probably a few years older. I thought it might be a fun idea to take him one time, especially since he had never been fishing in his life. "],
                ['center', "So, we snuck out about mid-afternoon and took the chain off of one of the boats and snagged the ores. I rowed us to one of the good spots I knew in the channel for fishing, and I started to set up my stuff."],
                ['center', "Well, your grandpa didn't even know the difference between a bobber and a jig, so I guess I set up all our stuff."],
                ['center', "But once I had done that, your grandpa tried to make a really big cast."],
                ['center', "I'm not sure if he was trying to impress me, or what was going through his mind, but he flung the rod back as far as he could, and launched the line so far he got it completely entangled in a tree."],
                ['center', "But that's not even the worse part."],
                ['center', "He got it entangled so badly that the bobber was wrapped around one of the main branches several times. "],
                ['center', "That might not seem like a big deal, until you consider the fact that we were floating on probably 20-foot-deep water, and that branch was about 10 feet in the air above our heads."],
                ['center', "But you know your grandpa, he was going to prove to me that he was going to get it down himself. So stubborn."],
                ['left', "Well, did he?"],
                ['center', "He did, but not without just about giving me a heart attack. At first, he thought it was a good idea at first to jump and try to reach it from the boat, which started shaking the rowboat so badly we nearly capsized."],
                ['center', "But, when he realized that wasn't going to work, he hopped out of the boat and swam to the bank. Once he got there, he climbed up the tree to reach the branch and untangled the rod while I held it."],
                ['center', "On his way back though, he jumped out of the tree into the water, and got me absolutely soaked."],
                ['center', "He nearly tipped us over again trying to get back in the boat, and by that point I'm pretty sure he had scared all the bass away."],
                ['hide', 'center'],
                ['shift', 'left', game.config.height * 5/6],
                ['shift', 'right', game.config.height * 5/6],
                ['right', "The whole time I just kept thinking to myself,"],
                ['right', "\'We are definitely going to flip this boat and drown\'"],
                ['right', "It's a miracle we didn't."],
                ['left', "I think it's safe to say Grandpa wasn't much of a fisherman."],
                ['right', "He was not a fisherman by any means. With all those shenanigans we were lucky we made it back by dark."],
                ['right', "However, I think the icing on the cake for that trip was when yourgrandpa came over to my house the next day, with a horrible case of poison oak."],
                ['right', "I think he got it trying to get the rod down, but he had rashes all over his arms and legs."],
                ['right', "The whole thing was a laugh a minute."],
                ['left', "Probably not for Grandpa though."],
                ['right', "*She Chuckles*"],
                ['right', "Certainly not for your grandfather."],
                ['left', "This is great Grandma! I definitely got some inspiration for my next design."],
                ['right', "Good, I'm glad. I'll let you take your time with it now, just let me know when you are finished."],
                ['end', 'storytime']
            ], false)
        } else if (this.boxBundle.scriptFinished === 'storytime') {
            this.finishedDialog = true;
            this.time.delayedCall(3000, () => {
                this.boxBundle.remove()
                this.time.delayedCall(1500, () => {
                    this.directions.setAlpha(1);
                });
            }, null, this)
        }

        // show helper text once puzzle is active
        if (!this.addedHelp && this.puzzleIsActive) {
            this.helpText = this.add.bitmapText(game.config.width / 2, game.config.height / 1.85, "CraftyGirls24", "Click and drag from point to point").setOrigin(0.5, 0.5);
            this.tweens.add({
                targets: this.helpText,
                alpha: {from: 0, to: 1},
                ease: 'Sine.InOut',
                duration: 2000,
                yoyo: true,
                loop: -1,

            });

            this.addedHelp = true;
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
                ease: 'Sine.easeIn',
                duration: 3000,
                onComplete: () => {this.finishedPlacedImage = true;},
            });

             this.placedImage = true;
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

        // go to next scene once finished dialog and drawing 
        if (this.finishedPlacedImage && this.finishedDialog) {
            // check if song is playing to stop it
            this.tweens.add({
                targets: this.song,
                volume: {from: this.song.volume, to: 0},
                duration: 3000,
                onComplete: () => {this.sound.stopByKey('firstMeetingBGMusic');},
            });

            if (!this.fadeout) this.fadeout = this.time.delayedCall(3000, () => {
                this.cam = this.cameras.main.fadeOut(5000, 0, 0, 0);
                this.cam.on('camerafadeoutcomplete',  () => {
                    this.scene.start('toBeContinued');
                })
            })
        }

    }
}