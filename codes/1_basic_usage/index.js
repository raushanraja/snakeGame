console.log('JS file  Loaded');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 30, 30);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 10, 30, 30);

}
