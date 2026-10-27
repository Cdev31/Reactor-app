//Temperatura minima y maxima del reactor
const MIN_TEMP = 1;
const MAX_TEMP = 100;

//Funcion para generar una temperatura aleatoria
const generarTemperatura = () => {
    return Math.floor(Math.random() * (MAX_TEMP - MIN_TEMP + 1)) + MIN_TEMP;
};

//Generar temperatura al iniciar el servidor
let temperaturaIdeal = generarTemperatura();

//Funcion para ajustar la temperatura del reactor
const adjust = (temperatura) => {

    //Comprobar si la temperatura ingresada es menor
    if(temperatura < temperaturaIdeal){
        return {
            result: "mas alta",
            stabilized: false,
            message: "La temperatura ideal del reactor es mas alta"
        };
    }

    //Comprobar si la temperatura ingresada es mayor
    if(temperatura > temperaturaIdeal){
        return {
            result: "mas baja",
            stabilized: false,
            message: "La temperatura ideal del reactor es mas baja"
        };
    }

    //Si la temperatura es correcta
    return {
        result: "estabilizado",
        stabilized: true,
        message: "Reactor estabilizado"
    };
};

//Funcion para reiniciar el reactor
const reboot = () => {

    //Generar una nueva temperatura
    temperaturaIdeal = generarTemperatura();

    return {
        message: "Sistema reiniciado. Nueva temperatura de estabilizacion generada."
    };
};

//Exportar las funciones y constantes
module.exports = { adjust, reboot, MIN_TEMP, MAX_TEMP };

