// - Programa para organizar los archivos descargados del navegador en sus respectivos directorios.

const os = require('os')
const fs = require('fs')
const path = require('path')

// ? Obtengo la ruta de la carpeta de descargas del ordenador. En caso de que no funcione en tu ordenador, cambia la ruta por la tuya.
const carpetaDescargas = path.join(os.homedir(), 'Downloads')
const carpetaRandomSuff = path.join(carpetaDescargas, 'downloaded random stuff')

// ? Leo toda la carpeta de descargas y obtengo un array con todos los archivos que hay dentro. 
// ? Filtro los archivos para no contar al archivo llamado desktop.ini que viene por defecto en Windows.
const archivosDentroDeDescargas = fs.readdirSync(carpetaDescargas).filter((archivo) => {
    return !archivo.endsWith('.ini') && archivo.includes('.')
})

console.log(archivosDentroDeDescargas)

for (const archivo of archivosDentroDeDescargas) {
    // ? Si el archivo termina con .txt, lo muevo a la carpeta de 'downloaded random stuff'
    if (archivo.endsWith('.txt')) {
        try {
            // ? Si la carpeta no existe, la creo.
            if (!fs.existsSync(carpetaRandomSuff)) {
                fs.mkdirSync(carpetaRandomSuff, { recursive: true })
            }
            // ! Es importante que tenga la ruta inicial CON EL ARCHIVO, por ejemplo: C:\Users\usuario\Downloads\archivo.txt
            // ! Y la ruta final (donde quieren que se mueva) CON EL ARCHIVO, por ejemplo: C:\Users\usuario\Downloads\downloaded random stuff\archivo.txt
            // ! SIEMPRE tiene que terminar con el archivo, caso contrario moverá toda la carpeta de la ruta inicial a la ruta final.
            const rutaOrigen = path.join(carpetaDescargas, archivo) // ? Por ejemplo: C:\Users\usuario\Downloads\archivo.txt
            const rutaDestino = path.join(carpetaRandomSuff, archivo) // ? Por ejemplo: C:\Users\usuario\Downloads\downloaded random stuff\archivo.txt
            fs.renameSync(rutaOrigen, rutaDestino) // ? Mueve el archivo desde la ruta origen hasta la ruta destino (ruta inicial, ruta final)
            console.log(`Archivo ${archivo} movido correctamente a ${rutaDestino}`) // ? En caso de que no haya ningún error, se mostrará un mensaje de éxito con el archivo o los archivos y la ruta a donde fueron movidos
        } catch (error) {
            // ? En coso de que haya un error, se mostrará un mensaje de error junto con el error.
            console.log("Hubo un error al intentar mover la carpeta, o no hay ningún archivo", error)
        }
    }


}