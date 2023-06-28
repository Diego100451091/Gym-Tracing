import app from "./app";
import { Server as WebsocketServer } from "socket.io";
import http from "http";

import {connectDB} from './db';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(server);

console.log('Server is runnign in port 3000');

// const http = require('http');
// const socketIO = require('socket.io');
// const fs = require('fs');

// const server = http.createServer(app);
// const io = socketIO(server);

// const PORT = 3000;

// app.use(express.static('src/public'));

// // Ruta para obtener los datos del archivo JSON
// app.get('/data', (req, res) => {
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error al obtener los datos.');
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // Escucha las conexiones de Socket.IO
// io.on('connection', (socket) => {
//   console.log('Nueva conexión de socket:', socket.id);

//   socket.emit("messages", {
//     id: 1,
//     text: `Tu id es ${socket.id}`
//   })
//   // // Lógica para manipular los datos y actualizar el archivo JSON

//   // // Ejemplo: Escuchar el evento 'guardarDatos' desde el cliente
//   // socket.on('guardarDatos', (datos) => {
//   //   // Actualizar los datos en el archivo JSON o realizar otras operaciones
//   //   // ...
//   //   console.log(datos);

//   //   // Enviar una respuesta al cliente
//   //   socket.emit('datosGuardados', { mensaje: 'Datos guardados exitosamente' });
//   // });
// });

// server.listen(PORT, () => {
//   console.log(`Servidor iniciado en el puerto ${PORT}`);
// });
