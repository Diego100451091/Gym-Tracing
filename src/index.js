import app from "./app.js";
import { Server as WebsocketServer } from "socket.io";
import http from "http";
import sockets from './sockets.js'

import {connectDB} from './db.js';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
console.log('Server is runnign in port 3000');

const io = new WebsocketServer(server);
sockets(io);
