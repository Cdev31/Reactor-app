
const ReactorService = require("./ReactorService");

//ENDPOINT PARA AJUSTAR LA TEMPERATURA
const adjust = (req, res) => {

    //Obtener la temperatura ingresada
    const temperatura = Number(req.body?.temperatura);

    //Validar que la temperatura sea correcta
    if(!Number.isInteger(temperatura) || temperatura < ReactorService.MIN_TEMP || temperatura > ReactorService.MAX_TEMP){
        return res.status(400).json({
            error: `La temperatura debe ser un número entero entre ${ReactorService.MIN_TEMP} y ${ReactorService.MAX_TEMP}`
        });
    }

    //Verificar la temperatura del reactor
    return res.json(ReactorService.adjust(temperatura));
};

//ENDPOINT PARA REINICIAR EL REACTOR
const reboot = (req, res) => {

    //Generar una nueva temperatura
    return res.json(ReactorService.reboot());
};

//Exportar las funciones
module.exports = { adjust, reboot };

