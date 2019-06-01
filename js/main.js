(function() {
  'use strict';

  const stage = document.getElementById('stage');

  let ctx;
  let dim = 5;
  let answer = [
    Math.floor(Math.random() * dim),
    Math.floor(Math.random() * dim)
  ];

  function draw() {
    let x;
    let y;
    let size = Math.floor(stage.width / dim);
    for (x = 0; x < dim; x++) {
      for (y = 0; y < dim; y++) {
        ctx.fillStyle = 'rgba(255, 0, 0, ' + Math.random() + ')';
        ctx.fillRect(
          // 0, 50, 100, ...
          size * x,
          size * y,
          size,
          size
        );
        ctx.fillStyle = '#000';
        ctx.textBaseline = 'top';
        ctx.fillText(x + ', ' + y, size * x, size * y);
      }
    }
  }

  if (typeof stage.getContext === 'undefined') {
    return;
  }
  ctx = stage.getContext('2d');

  draw();
})();
