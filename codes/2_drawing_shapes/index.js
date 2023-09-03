const canvas_one = document.getElementById('canvas');
const canvas_two = document.getElementById('canvas2');
const ctx = canvas_one.getContext('2d');
const ctx_two = canvas_two.getContext('2d');

function draw() {
    draw_rect();
    draw_path();
    draw_arc();
}

function draw_rect() {
    ctx.fillStyle = 'pink';

    // Using fillRect to create a reactangle.
    ctx.fillRect(5, 5, 30, 30);

    // Using fillRect to create a reactangle.
    ctx.strokeRect(40, 5, 30, 30);

    // Creating a fillRect and then clearning a part of it.
    ctx.fillStyle = 'black';
    ctx.fillRect(75, 5, 30, 30);

    ctx.clearRect(85, 5, 30, 30);
}

function draw_path() {
    // Step 1. Start with begin path
    // This method clearn alredy existing path list to hold paths new paths
    ctx.beginPath();

    // Step 2. Draw some paths using drawing methods

    ctx.moveTo(90, 5); // Move the pen to a specific point
    ctx.lineTo(100, 75); // Add a line segment between point (90,5) & (100,75)
    ctx.lineTo(100, 25); // Add a line segment between point (100,75) & (100,25)
    ctx.lineTo(90, 5); // Connect the last and first point
    ctx.fill(); // Fill the inner area

    // Same shaple as above, but just outline of area
    ctx.moveTo(90, 75); // Move the pen to a specific point
    ctx.lineTo(100, 145); // Add a line segment between point (90,5) & (100,75)
    ctx.lineTo(100, 100); // Add a line segment between point (100,75) & (100,25)
    ctx.lineTo(90, 75); // Connect the last and first point
    ctx.stroke(); // Give outline of path

    ctx.closePath();
}

function draw_arc() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            ctx_two.beginPath();
            const x = 25 + j * 50; // x coordinate
            const y = 25 + i * 50; // y coordinate
            const radius = 20; // Arc radius
            const startAngle = 0; // Starting point on circle
            const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
            const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

            ctx_two.arc(x, y, radius, startAngle, endAngle, counterclockwise);

            if (i > 1) {
                ctx_two.fill();
            } else {
                ctx_two.stroke();
            }
        }
    }
}
