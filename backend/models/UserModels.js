import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const {DataTypes} = Sequelize

const User = db.define('user',{
    kode_user: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();