
var $car = document.querySelector('.car');

var direction = 0;

document.addEventListener('keydown', function(e) {

  if(e.code === 'KeyA') {
    direction--;

    if(direction < 0) {
      direction = 8 - (-1*direction);
    }

    $car.className = 'car direction' + direction;

  } else if (e.code === 'KeyD') {
    direction++;

    if (direction > 7) {
      direction = 0;
    }

    $car.className = 'car direction' + direction;

  } else if (e.code === 'KeyS') {

  } else if (e.code === 'KeyW') {

  }

});
