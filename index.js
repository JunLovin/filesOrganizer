// - Programa para organizar los archivos descargados del navegador en sus respectivos directorios.

const os = require('os')
const fs = require('fs')
const path = require('path')

// ? Obtengo la ruta de la carpeta de descargas del ordenador. En caso de que no funcione en tu ordenador, cambia la ruta por la tuya.
const carpetaDescargas = path.join(os.homedir(), 'Downloads')

console.log(carpetaDescargas)