
var $car = document.querySelector('.car');

var directions = ['left', 'right', 'up', 'down'];
var currentDirection = 0;

document.addEventListener('keydown', function(e) {
  // console.log('keycode: ', e.keyCode);
  // console.log('code: ', e.code);

  if(e.code === 'KeyA') {
    currentDirection -= 45;

    $car.setAttribute('style', ' width: 100px; transform-origin: center; transform: rotate(' +
      currentDirection + 'deg);');
  } else if (e.code === 'KeyD') {
    currentDirection += 45;
    $car.setAttribute('style', ' width: 100px; transform-origin: center; transform: rotate(' +
      currentDirection + 'deg);');
  } else if (e.code === 'KeyS') {     //s

  } else if (e.code === 'KeyW') {     //w

  }

});
