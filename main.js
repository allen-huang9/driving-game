
var carObject = {
  direction: 'east',
  coordinateX: 0,
  coordinateY: 0
}

var $car = document.querySelector('.car');
var isRunning = false;
var runTimer = null;
document.addEventListener('keydown', function(e) {

  if(e.code === 'KeyA') {

    if(carObject.direction === 'east') {

      $car.className = 'car direction-north';
      carObject.direction = 'north'

    } else if (carObject.direction === 'north') {

      $car.className = 'car direction-west';
      carObject.direction = 'west';

    } else if (carObject.direction === 'west') {

      $car.className = 'car direction-south';
      carObject.direction = 'south';

    } else if (carObject.direction === 'south') {

      $car.className = 'car';
      carObject.direction = 'east';

    }

  } else if (e.code === 'KeyD') {

    if (carObject.direction === 'east') {

      $car.className = 'car direction-south';
      carObject.direction = 'south'

    } else if (carObject.direction === 'south') {

      $car.className = 'car direction-west';
      carObject.direction = 'west';

    } else if (carObject.direction === 'west') {

      $car.className = 'car direction-north';
      carObject.direction = 'north';

    } else if (carObject.direction === 'north') {

      $car.className = 'car';
      carObject.direction = 'east';

    }
  } else if (e.code === 'Space') {
    isRunning = !isRunning;
    if(isRunning) {
      runTimer = setInterval(moveCar, 16);
    }
  }

});

function moveCar() {

  carObject.coordinateX += 3;
  carObject.coordinateY = 0;
  $car.setAttribute('style', 'left: ' + carObject.coordinateX + 'px;');

}
