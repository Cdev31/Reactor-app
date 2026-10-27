import { useState } from "react"



export const ReactorApp = () => {
    const [temperatura, setTemperatura] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [historial, setHistorial] = useState([])
    const [estabilizado, setEstabilizado] = useState(false);

    const manejadorAjustar = async (event) => {
        //try {
        // 
        //cambiar por data = await response.json()
        //     const data;

        //     if (data.estabilizado) {
        //         setEstabilizado(true);
        //         setMensaje('Reactor estabilizado!')
        //     } else {
        //         setMensaje(`La temperatura ideal del reactor es: ${data.estado}`)
        //         setHistorial((temperaturaPrevia) => [...temperaturaPrevia, temperatura])
        //     }
        //     setTemperatura('')
        // } catch (error) {
        //     setMensaje('Error de conexion con el servidor del reactor')
        // }
    }

    const manejadorReiniciar = async () => {
        try {
            //respuesta de la api

            if (true) {
                setHistorial([])
                setEstabilizado(false)
                setMensaje('Sistema reiniciado. Nueva temperatura generada')
                setTemperatura('');
            }
        } catch (error) {
            setMensaje('Error al reiniciar el sistema')
        }
    }
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-md bg-white/10 border border-slate-700 rounded-xl shadow-2xl p-6 flex flex-col gap-6">

                {/* Encabezado */}
                <header className="text-center flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Estabiliza el Reactor
                    </h1>
                    <p className="text-sm text-slate-100">
                        Ingresa una temperatura entre 1 y 100 °C
                    </p>
                </header>

                {/* Banner de Mensajes / Estado */}
                {mensaje && (
                    <div
                        className={`p-4 rounded-lg text-sm font-semibold flex items-center justify-center text-center transition-all ${estabilizado
                            ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
                            : 'bg-amber-950/80 border border-amber-500/50 text-amber-300'
                            }`}
                    >
                        {mensaje}
                    </div>
                )}

                {/* Formulario de Intento */}
                <form onSubmit={manejadorAjustar} className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="number"
                        placeholder="Ej: 50"
                        value={temperatura}
                        onChange={(e) => setTemperatura(e.target.value)}
                        disabled={estabilizado}
                        min="1"
                        max="100"
                        required
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    />
                    <button
                        type="submit"
                        disabled={estabilizado}
                        className="bg-green-600 cursor-pointer hover:bg-green-500 text-white font-medium px-5 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cyan-600 flex items-center justify-center active:scale-95"
                    >
                        Ajustar
                    </button>
                </form>

                {/* Botón de Reinicio */}
                <button
                    type="button"
                    onClick={manejadorReiniciar}
                    className="w-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 font-semibold text-blue-100 hover:text-white py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center active:scale-98 cursor-pointer"
                >
                    Reiniciar Sistema
                </button>

                {/* Historial de Intentos */}
                <section className="flex flex-col gap-3 pt-4 border-t border-slate-700/60">
                    <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                        Historial de Intentos Fallidos
                    </h2>

                    {historial.length === 0 ? (
                        <p className="text-xs text-slate-500 italic">
                            No hay temperaturas fallidas registradas aún.
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                            {historial.map((temp, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-md text-xs"
                                >
                                    <span className="text-slate-400">Intento {index + 1}</span>
                                    <span className="font-mono font-bold text-slate-200">{temp} °C</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

            </div>
        </div>
    )
}