const temperatureConverter = {
    toCelsius: function(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },
    toFahrenheit: function(celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

function convertTemperature(temperature, unit) {
    let convertedTemperature;
    if (unit === 'C') {
        convertedTemperature = temperatureConverter.toFahrenheit(temperature);
        console.log(`${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`);
    } else if (unit === 'F') {
        convertedTemperature = temperatureConverter.toCelsius(temperature);
        console.log(`${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`);
    } else {
        console.log("Error: Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    }
}
convertTemperature(100, 'C');
convertTemperature(32, 'F');