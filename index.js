// - Programa para organizar los archivos descargados del navegador en sus respectivos directorios.

const os = require('os')
const fs = require('fs')
const path = require('path')

// ? Obtengo la ruta de la carpeta de descargas del ordenador. En caso de que no funcione en tu ordenador, cambia la ruta por la tuya.
const carpetaDescargas = path.join(os.homedir(), 'Downloads')
// ? Obtengo las rutas de las carpetas en donde se guardarán los archivos dependiendo de su extensión.
const carpetaImagenes = path.join(carpetaDescargas, 'downloaded images')
const carpetaInstaladores = path.join(carpetaDescargas, 'downloaded installers')
const carpetaZip = path.join(carpetaDescargas, 'downloaded compress')
const carpetaAudio = path.join(carpetaDescargas, 'downloaded audio')
const carpetaVideo = path.join(carpetaDescargas, 'downloaded video')
const carpetaDocumentos = path.join(carpetaDescargas, 'downloaded documents and presentations')
const carpetaRandomSuff = path.join(carpetaDescargas, 'downloaded random stuff')
const carpetaCode = path.join(carpetaDescargas, 'downloaded code')

const organizeDownloads = () => {
    // ? Leo toda la carpeta de descargas y obtengo un array con todos los archivos que hay dentro. 
    // ? Filtro los archivos para no contar al archivo llamado desktop.ini que viene por defecto en Windows.
    // - Guardo los archivos de la carpeta Descargas en un array. SOLO LOS ARCHIVOS, NO LAS CARPETAS.
    const archivosDentroDeDescargas = fs.readdirSync(carpetaDescargas).filter((archivo) => {
        return !archivo.endsWith('.ini') && archivo.includes('.')
    })

    // ? Por cada archivo dentro de los archivos guardados en la variable archivosDentroDeDescargas se hará lo siguiente:
    for (const archivo of archivosDentroDeDescargas) {
        switch (true) {
            // - CODE
            case archivo.endsWith('.py') ||
                archivo.endsWith('.js') ||
                archivo.endsWith('.ts') ||
                archivo.endsWith('.java') ||
                archivo.endsWith('.html') ||
                archivo.endsWith('.css') ||
                archivo.endsWith('.json') ||
                archivo.endsWith('.md') ||
                archivo.endsWith('.c') ||
                archivo.endsWith('.cpp') ||
                archivo.endsWith('.cs') ||
                archivo.endsWith('.lua') ||
                archivo.endsWith('.jsx') ||
                archivo.endsWith('.tsx') ||
                archivo.endsWith('.php') ||
                archivo.endsWith('.go'):
                try {
                    if (!fs.existsSync(carpetaCode)) {
                        fs.mkdirSync(carpetaCode, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaCode}`)
                    }
                    const rutaOrigenCode = path.join(carpetaDescargas, archivo)
                    const rutaDestinoCode = path.join(carpetaCode, archivo)
                    fs.renameSync(rutaOrigenCode, rutaDestinoCode)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoCode}`)
                } catch (error) {
                    console.error(`Ha ocurrido un error intentando mover el ${archivo} a ${carpetaCode}`)
                }
                break;
            // - AUDIO
            case archivo.endsWith('.mp3') ||
                archivo.endsWith('.wav') ||
                archivo.endsWith('.aac') ||
                archivo.endsWith('.flac') ||
                archivo.endsWith('.m4a') ||
                archivo.endsWith('.wma'):
                try {
                    if (!fs.existsSync(carpetaAudio)) {
                        fs.mkdirSync(carpetaAudio, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaAudio}`)
                    }
                    const rutaOrigenAudio = path.join(carpetaDescargas, archivo)
                    const rutaDestinoAudio = path.join(carpetaAudio, archivo)
                    fs.renameSync(rutaOrigenAudio, rutaDestinoAudio)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoAudio}`)
                } catch (error) {
                    console.error(`Ha ocurrido uin error intentando mover el ${archivo} a ${carpetaAudio}`)
                }
                break;
            // - PROGRAMAS
            case archivo.endsWith('.exe') ||
                archivo.endsWith('.msi') ||
                archivo.endsWith('.appx') ||
                archivo.endsWith('.msix'):
                try {
                    if (!fs.existsSync(carpetaInstaladores)) {
                        fs.mkdirSync(carpetaInstaladores, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaInstaladores}`)
                    }
                    const rutaOrigenInstaladores = path.join(carpetaDescargas, archivo)
                    const rutaDestinoInstaladores = path.join(carpetaInstaladores, archivo)
                    fs.renameSync(rutaOrigenInstaladores, rutaDestinoInstaladores)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoInstaladores}`)
                } catch (error) {
                    console.error(`Ha ocurrido un error intentando mover el ${archivo} a ${carpetaInstaladores}`)
                }
                break;
            // - VIDEOS
            case archivo.endsWith('.mp4') ||
                archivo.endsWith('.avi') ||
                archivo.endsWith('.mov') ||
                archivo.endsWith('.wmv') ||
                archivo.endsWith('.mkv') ||
                archivo.endsWith('.flv'):
                try {
                    if (!fs.existsSync(carpetaVideo)) {
                        fs.mkdirSync(carpetaVideo, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaVideo}`)
                    }
                    const rutaOrigenVideo = path.join(carpetaDescargas, archivo)
                    const rutaDestinoVideo = path.join(carpetaVideo, archivo)
                    fs.renameSync(rutaOrigenVideo, rutaDestinoVideo)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoVideo}`)
                } catch (error) {
                    console.error(`Ha ocurrido un error intentando mover el ${archivo} a ${carpetaVideo}`)
                }
                break;
            // - COMPRIMIDOS
            case archivo.endsWith('.zip') ||
                archivo.endsWith('.7z') ||
                archivo.endsWith('.tar') ||
                archivo.endsWith('.rar'):
                try {
                    if (!fs.existsSync(carpetaZip)) {
                        fs.mkdirSync(carpetaZip, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaZip}`)
                    }
                    const rutaOrigenZip = path.join(carpetaDescargas, archivo)
                    const rutaDestinoZip = path.join(carpetaZip, archivo)
                    fs.renameSync(rutaOrigenZip, rutaDestinoZip)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoZip}`)
                } catch (error) {
                    console.error(`Ha ocurrido un error intentando mover el ${archivo} a ${carpetaZip}`)
                }
                break;
            // - IMAGENES
            case archivo.endsWith('.gif') ||
                archivo.endsWith('.png') ||
                archivo.endsWith('.jpg') ||
                archivo.endsWith('.jpeg') ||
                archivo.endsWith('.webp') ||
                archivo.endsWith('.bmp') ||
                archivo.endsWith('.svg') ||
                archivo.endsWith('.tiff') ||
                archivo.endsWith('.heif'):
                try {
                    if (!fs.existsSync(carpetaImagenes)) {
                        fs.mkdirSync(carpetaImagenes, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaImagenes}`)
                    }
                    const rutaOrigenImagen = path.join(carpetaDescargas, archivo)
                    const rutaDestinoImagen = path.join(carpetaImagenes, archivo)
                    fs.renameSync(rutaOrigenImagen, rutaDestinoImagen)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoImagen}`)
                } catch (error) {
                    console.error(`Ha ocurrido un error intentand mover el ${archivo} a ${carpetaImagenes}`)
                }
                break;
            // - DOCUMENTOS Y PRESENTACIONES
            case archivo.endsWith('.pdf') ||
                archivo.endsWith('.docx') ||
                archivo.endsWith('.txt') ||
                archivo.endsWith('.ppsm') ||
                archivo.endsWith('.ppsx') ||
                archivo.endsWith('.ppt') ||
                archivo.endsWith('.pptm'):
                try {
                    if (!fs.existsSync(carpetaDocumentos)) {
                        fs.mkdirSync(carpetaDocumentos, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaDocumentos}`)
                    }
                    const rutaOrigenDocumentos = path.join(carpetaDescargas, archivo)
                    const rutaDestinoDocumentos = path.join(carpetaDocumentos, archivo)
                    fs.renameSync(rutaOrigenDocumentos, rutaDestinoDocumentos)
                    console.log(`Archivo ${archivo} se ha movido correctamente a ${rutaDestinoDocumentos}`)
                } catch (error) {
                    console.error(`Ha ocurrido un error moviendo el archivo ${archivo} a ${carpetaDocumentos}`)
                }
                break;
            // - Si el archivo no coincide con ninguna extensión mensionada anteriormente, se moverá a la carpeta "downloaded random stuff"
            default:
                try {
                    // ? Si la carpeta no existe, la creo.
                    if (!fs.existsSync(carpetaRandomSuff)) {
                        // ? Recursive permite crear carpetas anidadas, por ejemplo: Si creo C:\Users\usuario\Downloads\downloaded random stuff\2025\January
                        // ? Si ninguna de las tres carpetas existen, se crearán las tres carpetas, es decir, se crearán las carpetas: downloaded random stuff, 2025 y January
                        fs.mkdirSync(carpetaRandomSuff, { recursive: true })
                        console.log(`Se ha creado la carpeta ${carpetaRandomSuff}`)
                    }
                    // ! Es importante que tenga la ruta inicial CON EL ARCHIVO, por ejemplo: C:\Users\usuario\Downloads\archivo.txt
                    // ! Y la ruta final (donde quieren que se mueva) CON EL ARCHIVO, por ejemplo: C:\Users\usuario\Downloads\downloaded random stuff\archivo.txt
                    // ! SIEMPRE tiene que terminar con el archivo, caso contrario moverá toda la carpeta de la ruta inicial a la ruta final.
                    const rutaOrigenRandom = path.join(carpetaDescargas, archivo) // ? Por ejemplo: C:\Users\usuario\Downloads\archivo.txt
                    const rutaDestinoRandom = path.join(carpetaRandomSuff, archivo) // ? Por ejemplo: C:\Users\usuario\Downloads\downloaded random stuff\archivo.txt
                    fs.renameSync(rutaOrigenRandom, rutaDestinoRandom) // ? Mueve el archivo desde la ruta origen hasta la ruta destino (ruta inicial, ruta final)
                    console.log(`Archivo ${archivo} movido correctamente a ${rutaDestinoRandom}`)
                } catch (error) {
                    // ? En coso de que haya un error, se mostrará un mensaje de error junto con el error.
                    console.error(`Ha ocurrido un error moviendo el archivo ${archivo} a ${carpetaRandomSuff}`)
                }
                break;
        }
    }
}

module.exports = { organizeDownloads }