class ExperienceImage {
    constructor(context) {
        this.ctx = context;
        this.clockRadius = 0;
    }

    draw() {
        let canvasWidth = this.ctx.canvas.width;
        let canvasHeight = this.ctx.canvas.height;
        this.clockRadius = canvasHeight / 2 - 50;
        this.ctx.translate(canvasWidth / 2, canvasHeight / 2);
        this.ctx.arc(0, 0, this.clockRadius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.drawTime();
    }

    drawTime() {
        var grad;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.clockRadius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
      
        grad = this.ctx.createRadialGradient(0, 0 ,this.clockRadius * 0.95, 0, 0, this.clockRadius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        this.ctx.strokeStyle = grad;
        this.ctx.lineWidth = this.clockRadius * 0.1;
        this.ctx.stroke();
      
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.clockRadius * 0.05, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#333';
        this.ctx.fill();

        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60))+(second * Math.PI / (360 * 60));
        this.drawHand(this.ctx, hour, this.clockRadius * 0.5, this.clockRadius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(this.ctx, minute, this.clockRadius * 0.8, this.clockRadius * 0.07);
        // second
        second = (second * Math.PI / 30);
        this.drawHand(this.ctx, second, this.clockRadius * 0.9, this.clockRadius * 0.02);
    }

    drawHand(ctx, position, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(position);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-position);
    }
}  