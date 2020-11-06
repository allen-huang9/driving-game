
var carObject = {
  direction: 'east',
  coordinteX: 0,
  coordinteY: 0
}

var $car = document.querySelector('.car');

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
  }

});
