function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  Car.prototype.Details = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
}
function ElectricCar(make, model, year, batteryCapacity) 
{
    Car.call(this, make, model, year);
    this.batteryCapacity = batteryCapacity;
}
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.BatteryInfo = function() {
return `Battery capacity: ${this.batteryCapacity} `;
};
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.Details());  
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2021, 75);
console.log(myElectricCar.Details());  
console.log(myElectricCar.BatteryInfo()); 

