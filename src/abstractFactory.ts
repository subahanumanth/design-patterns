class VehicleFactory {
    static create(type) {
        switch (type) {
            case 'car':
                return new CarFactory();
            case 'bike':
                return new BikeFactory();
            default:
                return new BikeFactory();
        }
    }
}

class CarFactory {
    getHyundai() {
        return new HyundaiCar();
    }
}

class BikeFactory {
    getHyundai() {
        return new HyundaiBike();
    }
}

class HyundaiCar {
    getVehicleName() {
        return 'Hyundai Car';
    }
}

class HyundaiBike {
    getVehicleName() {
        return 'Hyundai Bike';
    }
}


export default VehicleFactory;