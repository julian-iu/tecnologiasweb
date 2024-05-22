const express = require('express');
require('./DB/mongoDB');
require ('dotenv').config();
const clienteRuta = require('./src/routes/clienteRuta');
const etapaRuta = require('./src/routes/etapaRuta');
const tipoProyectoRuta = require('./src/routes/tipoProyectoRuta');
const universidadRuta = require('./src/routes/unversidadRuta');

const app = express();
app.use(express.json());

async function main() {
    await app.listen (process.env.PORT);
    console.log(`servidor en puerto ${process.env.PORT}, Correctamente`);
}

app.get('/', (req,res) => {
    res.send('Conexion Exitosa!');
})

app.use('/cliente', clienteRuta);
app.use('/etapa', etapaRuta);
app.use('/tipoProyecto', tipoProyectoRuta);
app.use('/universidad', universidadRuta);
main();