import { getConnection } from "../database/conexion.js";

export const getUsuario =  async (req, res) => {
    const pool = await getConnection();
    const result =  await pool.request().query('SELECT * FROM Usuario');

    console.log(result);
    res.json(result.recordset);
};