class dialogBoxBundle {
    constructor(scene, script){
        this.scene = scene;
        this.leftBox = new Dialog(scene, 'left', '', true, 25);
        this.rightBox = new Dialog(scene, 'right', '', true, 40);
        this.centerBox = new Dialog(scene, 'center', '', true, 30);
        this.centerBox.hide();
        this.leftBox.hide();
        this.rightBox.hide();

        this.nextBox = '';
        this.activeBox = this.leftBox;
        this.scriptLines = script;
    
        
    }

    update(){
        this.scene.input.on('pointerup', () => {
            if(this.nextBox === 'left' && !this.activeBox.isTyping) {
                this.leftBox.click();
            } else if (this.nextBox === 'right' && !this.activeBox.isTyping) {
                this.rightBox.click();
            } else if (this.nextBox === 'center' && !this.activeBox.isTyping) {
                this.centerBox.click();
            }
        });
    }
}