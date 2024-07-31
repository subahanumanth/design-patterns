interface Observer {
    update(weather);
}

// Subject Interface
interface Subject {
    addObserver(observer);
    removeObserver(observer);
    notifyObservers();
}

// ConcreteSubject Class
class WeatherStation implements Subject {
    private observers;
    private weather;
    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.map((observer) => observer.update());
    }

    setWeather(newWeather) {
        this.weather = newWeather;
        this.notifyObservers();
    }
}

class PhoneDisplay implements Observer {
    private weather;
    update(weather) {
        this.weather = weather;
        this.display();
    }

    display() {
        console.log("Phone Display: Weather updated - " + this.weather);
    }
}

class TVDisplay implements Observer {
    private weather;
    update(weather) {
        this.weather = weather;
        this.display();
    }

    display() {
        console.log("TV Display: Weather updated - " + this.weather);
    }
}