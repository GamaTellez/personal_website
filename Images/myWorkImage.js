class MyWorkImage {
    constructor (context) {
        this.ctx = context;
        this.clockRadius;
    }

    draw() {
        let canvasWidth = this.ctx.canvas.width;
        let canvasHeight = this.ctx.canvas.height;
        //this.ctx.translate(canvasWidth / 2, canvasHeight / 2);
        let screenWidth = canvasWidth - 40;
        let screenHeight = canvasHeight - 110;
        this.ctx.beginPath();
        this.ctx.roundedRectangle(10, 30, screenWidth, screenHeight, 10);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 5;
        this.ctx.rect(canvasWidth / 2 - 20, canvasHeight - 80, 20, 30);
        this.ctx.rect(canvasWidth / 2 - 50, canvasHeight - 50, 80, 5);

        this.ctx.moveTo(30, 50);
        this.ctx.lineTo(130, 50);
        
        this.ctx.moveTo(50, 65);
        this.ctx.lineTo(160, 65);

        this.ctx.moveTo(70, 80);
        this.ctx.lineTo(180, 80);

        this.ctx.moveTo(50, 95);
        this.ctx.lineTo(100, 95);

        this.ctx.moveTo(50, 95);
        this.ctx.lineTo(100, 95);

        this.ctx.moveTo(30, 110);
        this.ctx.lineTo(50, 110);

        this.ctx.moveTo(30, 130);
        this.ctx.lineTo(100, 130);

        this.ctx.moveTo(50, 145);
        this.ctx.lineTo(140, 145);

        this.ctx.stroke();
    }
}