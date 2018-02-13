
var canvas = document.createElement('canvas'); 
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d'); 
window.onresize = ()=>{
canvas.width = innerWidth; 
canvas.height = canvas.width / 1.33;
ctx.translate(canvas.width / 2, canvas.height / 2);
}
window.onresize();

var objUrl = 'js/pc.obj'

fetch(objUrl).then(d => d.text().then(t => loadObj(t)));

var points = [];
var faces = [];

var persp = 300;
var size = 200;

function loadObj(str) {
  var lines = str.split('\n');

  lines.forEach(line => {
    var prop = line.split(' ');
    switch (prop[0]) {
      case 'v':
        points.push({
          x: +prop[1] * size,
          y: +prop[2] * -1 * size,
          z: +prop[3] * size
        });
        break;
      case 'f':
        faces.push(prop.slice(1).map(d => +d.split('/')[0] - 1));
    }
  });
}

function to2d(p3d) {
  var z = persp / (persp + p3d.z);
  return { x: p3d.x * z, y: p3d.y * z};
}

loop();
function loop() {
  faces.sort((a, b) => points[b[0]].z - points[a[0]].z);

  ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

  faces.forEach(face => {
    ctx.beginPath();
    face.forEach(p => {
      let p2d = to2d(points[p]);
      ctx.lineTo(p2d.x, p2d.y);
    });

    ctx.fillStyle = `hsl(${200-points[face[0]].z * 0.5}, 100%, 50%)`;
    ctx.fill();
  });

  rotate(-5);
  requestAnimationFrame(loop);
}

function rotate(angle) {
  var cos = Math.cos(angle * Math.PI / 180);
  var sin = Math.sin(angle * Math.PI / 180);

  points.forEach(point => {
    var temp = (point.x * cos) - (point.z * sin);
    point.z = (point.x * sin) + (point.z * cos);
    point.x = temp;
  });
}