import express from "express";
import config from "./config";
import inicioRoute from './routes/inicio.routes'
import { methods as auth } from "./controllers/auth.controller.js";
//import router from "./routes/usuario.routes";
//import usuarioRoute from './routes/usuario.routes'

const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.set('views', path.join(__dirname, '../src/views'))
app.use(inicioRoute);
app.use(express.json());
//app.use(router);

//Rutas
app.get('/home', (req, res) => {
    res.render('home')});
app.get('/horarios', (req, res) => {
    res.render('horarios')});
app.post("/api/login", auth.Login);

//settings
app.set('port', config.port)
export default app