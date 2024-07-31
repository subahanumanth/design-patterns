class VehicleFactory {
    static create(type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
                return new Bike();
        }
    }
}

class Car {
    getVehicleName() {
        return 'Car';
    }
}

class Bike {
    getVehicleName() {
        return 'Bike';
    }
}

export default VehicleFactory;