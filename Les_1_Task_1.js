
function convertCelsiusToFarenheit(Tc) {
    const Tf = (9 / 5) * Tc + 32;
    return `Temperature ${Tc} C in Farenheit is ${Tf.toFixed(1)} F`;
}

let userTemperatureInCelsius = 36.6;


console.log(convertCelsiusToFarenheit(userTemperatureInCelsius));

