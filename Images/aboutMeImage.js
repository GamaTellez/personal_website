
class AboutMeImage {
    constructor(context) {
        this.ctx = context;
    }

    draw() {
        let canvasW = this.ctx.canvas.width;
        let canvasH = this.ctx.canvas.height;

        //head
        let headRadious = 30;
        let headCenterX = canvasW / 2;
        let headCenterY = canvasH / 2 - 80;
        this.ctx.beginPath();
        this.ctx.arc(headCenterX, headCenterY, headRadious, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.stroke();  

        //body
        this.ctx.beginPath();
        this.ctx.roundedRectangle(canvasW / 2 - 40, canvasH / 2 - 45, 80, 100, 10);
        this.ctx.fill();

        //rightArm
        this.ctx.beginPath();
        this.ctx.roundedRectangle(canvasW / 2 + 42, canvasH / 2 - 38, 30, 80, 10);
        this.ctx.fill(); 

        this.ctx.save();

        //leftArm
        //this.ctx.translate(canvasW / 2 - 72, canvasH / 2 - 38);
        this.ctx.beginPath();
        this.ctx.roundedRectangle(canvasW / 2 - 72, canvasH / 2 - 38, 30, 80, 10);
        //this.ctx.roundedRectangle(0, 0, 30, 70, 10);
        this.ctx.fill(); 
    }
}

     