const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// process.argv[2] es la carpeta a la que deseo acceder
// Un ejemplo de ejecución sería así: node 8.ls-advanced cjs
// El '.' lista la carpeta actual
const folder = process.argv[2] ?? '.';

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
    // Cancela el proceso actual
    process.exit(1);
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath); // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder)