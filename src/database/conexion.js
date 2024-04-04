import sql from 'mssql'

const dbConfig = {
    server: 'DESKTOP-NGAHOF2',
    "authentication": {
        "type": "default",
        "options": {
            "userName": "director",
            "password": "Db5784@"
        }
    },
    database:'ColegioFDV',
    options: {
        port: 1433,
        trustServerCertificate: true
    }
};

export async function getConnection(){
    try{
        const pool = await sql.connect(dbConfig);
        return pool;
    } catch (error) {
        console.error(error);
    }
    const result = await pool.request().query("SELECT * FROM Usuario");
    console.log(result);
}