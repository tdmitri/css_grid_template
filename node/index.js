function car(carName) {
    this.carName = carName || 'Unknown name';
}

car.prototype.logName = function(){
    console.log('Car name is', this.carName);
}

var bmw = new car('BMW');
bmw.logName();

