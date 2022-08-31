const fs = require('fs')

const path = './';
// Regresar ../
// Ahí mismo ./
const nameFile = 'my-file.txt';
const contentForFile = 'Esto lo escribí desde node';
// Path Absoluto: C:\Users\Paola Santillan\Desktop\js-avanzado-Paola\js-avanzado-PaolaSantillan\1-node\1.2-crear-archivo
// Path Relativo: 1-node\1.2-crear-archivo
//const filePath = path + '/' + nameFile;
const filePath = `${path}/${nameFile}`;
fs.writeFile(filePath, contentForFile, (err) => {
    if(err) {
        throw err;
    } else {
        console.log('archivo creado con éxito...!!')
    }
});