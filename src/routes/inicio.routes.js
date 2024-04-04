import { Router } from "express";

const routerInicio =  Router()

routerInicio.get('/', (req, res) => {
    res.render('index')});

export default routerInicio