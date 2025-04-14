# 📁 Files Organizer

Una herramienta simple pero poderosa para organizar automáticamente los archivos de tu carpeta de descargas en categorías específicas.

![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)
![Versión](https://img.shields.io/badge/Versión-1.0.0-green)

## 📋 Descripción

**Files Organizer** es una aplicación de Node.js que monitorea tu carpeta de descargas y organiza automáticamente los archivos en subcarpetas según su tipo de archivo. Ideal para mantener tu carpeta de descargas limpia y organizada sin esfuerzo manual.

## ✨ Características

- ✅ Organización automática de archivos por tipo
- ✅ Soporte para múltiples formatos de archivo
- ✅ Creación automática de carpetas de destino
- ✅ Manejo de errores robusto
- ✅ Mensajes de consola informativos
- 🔜 Interfaz gráfica (próximamente)

## 📂 Categorías de organización

La aplicación organiza los archivos en las siguientes categorías:

| Carpeta | Tipos de archivo |
|---------|------------------|
| 📊 **downloaded code** | .py, .js, .ts, .java, .html, .css, .json, .md, .c, .cpp, .cs, .lua, .jsx, .tsx, .php, .go |
| 🎵 **downloaded audio** | .mp3, .wav, .aac, .flac, .m4a, .wma |
| 💿 **downloaded installers** | .exe, .msi, .appx, .msix |
| 🎬 **downloaded video** | .mp4, .avi, .mov, .wmv, .mkv, .flv |
| 🗜️ **downloaded compress** | .zip, .7z, .tar, .rar |
| 🖼️ **downloaded images** | .gif, .png, .jpg, .jpeg, .webp, .bmp, .svg, .tiff, .heif |
| 📄 **downloaded documents and presentations** | .pdf, .docx, .txt, .ppsm, .ppsx, .ppt, .pptm |
| 📦 **downloaded random stuff** | Todos los demás tipos de archivo |

## 🚀 Instalación

### Requisitos previos
- [Node.js](https://nodejs.org/) (versión 12 o superior)

### Pasos de instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/filesOrganizer.git
   cd filesOrganizer
   ```
2. Instala las dependencias:
    ```bash
    npm install
    ```

## 🔧 Uso

Para ejecutar la aplicación:

```bash
npm start
```

La aplicación escaneará tu carpeta de descargas y moverá automáticamente los archivos a las carpetas correspondientes según su tipo.

## ⚙️ Personalización

Si deseas cambiar las rutas de las carpetas o añadir más extensiones de archivo, puedes modificar el archivo `index.js`:

```js
// Cambiar la carpeta de descargas
const carpetaDescargas = path.join(os.homedir(), 'TuCarpetaPersonalizada')

// Añadir más extensiones en los casos del switch
case archivo.endsWith('.tu-extension'):
    // Código para manejar la nueva extensión
    break;
```

## 🔜 Próximas características

- Interfaz gráfica de usuario
- Configuración personalizable
- Programación de ejecución automática
- Historial de archivos organizados

## 📄 Licencia

Este proyecto esá bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🧑🏻‍💻 Autor

Creado con ♥️ por [Said Ruiz](https://said-beta.vercel.app).