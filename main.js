// - Aplicación creada con electron
// ? Importamos dos módulos de electron
// ? app: Controla la vida de la aplicación
// ? BrowserWindow: Crea y controla las ventanas de la aplicación
const { app, BrowserWindow } = require('electron')

// - Creamos la ventana de la aplicación
const createWindow = () => {
    // ? Creamos una instancia de BrowserWindow y lo guardamos en la variable win
    // ? Le asignamos un ancho y alto de 800px y 600px respectivamente
    const win = new BrowserWindow({
        width: 1980,
        height: 1080,
        icon: './public/favicon/favicon-96x96.png'
    })

    win.webContents.openDevTools()

    // ? Removemos el menú por defecto de la aplicación
    win.removeMenu()

    // ? Cargamos el archivo index.html en la ventana
    win.loadFile('./src/index.html')
}

// - Iniciamos la aplicación
// ? .whenReady es el evento 'ready' de nodejs, pero utilizamos el método whenReady de electron para evitar problemas con las promesa
app.whenReady().then(() => {
    // ? Llamamos a la función createWindow para crear la ventana de la aplicación
    createWindow()
})