
var $car = document.querySelector('.car');

var direction = 0;

document.addEventListener('keydown', function(e) {

  if(e.code === 'KeyA') {
    direction--;

    if(direction < 0) {
      direction = 3;
    }

    if(direction === 3) {
      $car.className = 'car up';
    } else if (direction === 2) {
      $car.className = 'car right';
    } else if (direction === 1) {
      $car.className = 'car down';
    } else {
      $car.className = 'car';
    }

  } else if (e.code === 'KeyD') {
    direction++;

    if (direction > 3) {
      direction = 0;
    }

    if (direction === 3) {
      $car.className = 'car up';
    } else if (direction === 2) {
      $car.className = 'car right';
    } else if (direction === 1) {
      $car.className = 'car down';
    } else {
      $car.className = 'car';
    }

  } else if (e.code === 'KeyS') {

  } else if (e.code === 'KeyW') {

  }

});
