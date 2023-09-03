class Solar {
    constructor(ctx) {
        this.draw = this.draw.bind(this);
        this.base =
            'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations/';
        this.sun = new Image();
        this.sun.src = this.base + 'canvas_sun.png';
        this.moon = new Image();
        this.moon.src = this.base + 'canvas_moon.png';
        this.earth = new Image();
        this.earth.src = this.base + 'canvas_earth.png';
        this.ctx = ctx;
        window.requestAnimationFrame(this.draw);
    }

    draw() {
        let ctx = this.ctx;
        ctx.clearRect(0, 0, 800, 800);

        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
        ctx.save();
        ctx.translate(250, 250);

        // Earth
        const time = new Date();
        ctx.rotate(
            ((2 * Math.PI) / 60) * time.getSeconds() +
                ((2 * Math.PI) / 60000) * time.getMilliseconds()
        );
        ctx.translate(150, 0);
        ctx.fillRect(0, -12, 40, 24); // Shadow
        ctx.drawImage(this.earth, -12, -12);

        // Moon
        ctx.save();
        ctx.rotate(
            ((2 * Math.PI) / 6) * time.getSeconds() +
                ((2 * Math.PI) / 6000) * time.getMilliseconds()
        );
        ctx.translate(0, 28.5);
        ctx.drawImage(this.moon, -3.5, -3.5);
        ctx.restore();

        ctx.restore();

        ctx.beginPath();
        ctx.arc(250, 250, 150, 0, Math.PI * 2, false); // Earth orbit
        ctx.stroke();

        ctx.drawImage(this.sun, 0, 0, 500, 500);

        window.requestAnimationFrame(this.draw);
    }
}

