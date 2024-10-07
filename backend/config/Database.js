//import package relasi database
import { Sequelize } from "sequelize"

//inisialisasi koneksi database
const db = new Sequelize(
    'travelingkuy',
    'root',
    '',
    {
    host: "localhost",
    dialect: "mysql"
    })

//buat modul library database
// module.exports =  db 
export default db