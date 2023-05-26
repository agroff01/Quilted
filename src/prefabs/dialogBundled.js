class dialogBoxBundle {
    constructor(scene, script, waitDelay = 5000){
        this.scene = scene;
        this.leftBox = new Dialog(scene, 'left', 25, waitDelay);
        this.rightBox = new Dialog(scene, 'right', 40, waitDelay);
        this.centerBox = new Dialog(scene, 'center', 30, waitDelay);
        this.centerBox.hide();
        this.leftBox.hide();
        this.rightBox.hide();

        
        this.script = script;
        this.nextInstruction = this.script[0][0];
        this.activeBox = this.leftBox;
        this.scriptIndex = -1;
        this.unusable = false;
        
    }

    update(){
        if (!this.unusable){
            let click = false;
            this.scene.input.on('pointerup', () => {
                if (this.scene.input.activePointer.upY > 600 && this.nextInstruction !== 'end') 
                    if(this.activeBox.DialogToDisplayQ.isEmpty)this.cycleScript();
                    else this.activeBox.click()
                click = true;
                
            });

            if (this.activeBox.finished && !click) this.cycleScript();
        }
    }

    cycleScript(){
        // do nothing if text is not finished from current box or if we reached the end of the script
        if (this.nextInstruction === 'end' && this.activeBox.finished){
            this.leftBox.hide()
            this.rightBox.hide()
            this.centerBox.hide()
        }
        if (this.activeBox.isTyping || this.nextInstruction === 'end') return;

        let currentBox = '', boxChosen = false;

        for (let i = this.scriptIndex + 1; i < this.script.length-1; i++, this.scriptIndex++) {
            console.log("Checking Script Line " + i + ": " + this.script[i][1])
            if (currentBox != this.nextInstruction && boxChosen) return; // if the next script line is not about giving the current box dialog, then we will come back to it later

            if (this.nextInstruction === 'left') { // left is our next dialog sequence
                currentBox = 'left'; 
                boxChosen = true;
                this.activeBox = this.leftBox;
                this.activeBox.addText(this.script[i][1]);
                

            } else if (this.nextInstruction === 'right') { // right is our next dialog sequence
                currentBox = 'right'; 
                boxChosen = true;
                this.activeBox = this.rightBox;
                this.activeBox.addText(this.script[i][1])

            } else if (this.nextInstruction === 'center') { // center is our next dialog sequence
                currentBox = 'center'; 
                boxChosen = true;
                this.activeBox = this.centerBox;
                this.activeBox.addText(this.script[i][1])

            } else if (this.nextInstruction === 'sound') { // make noise
                // PLAY THE SOUND AT THE FILE PATH

            } else if (this.nextInstruction === 'hide') {  // hide a box
                script[i][1] === 'left' ? this.leftBox.hide() : 
                (script[i][1] === 'right' ? this.rightBox.hide() : 
                (this.script[i][1] === 'center' ? this.centerBox.hide() : false))

            } else if (this.nextInstruction === 'puzzle') { // start the scene's puzzle when this keyword is found
                this.scene.puzzleIsActive = true;

            } else if (this.nextInstruction === 'end') {
                return; // our script is DONE!
            } else {
                console.log("UNDEFINED INSTRUCTION ON LINE " + i + ":  " + this.script[i][0])
            }
            this.nextInstruction = this.script[i+1][0];
        }

    }

    get scriptFinished() {
        return (this.activeBox.finished && ((this.scriptIndex >= this.script.length) || this.nextInstruction === 'end')) ? this.script[this.scriptIndex+1][1] : false;
    }

    remove() {
        this.leftBox.hide()
        this.rightBox.hide()
        this.centerBox.hide()
        this.unusable = true;
    }
}