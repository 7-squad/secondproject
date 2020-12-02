import { Sequelize, DataTypes , Model} from "sequelize";

//招生省份设置表
class Province extends Model { }

export default function ( sequelize , type){
    let model = Province.init({
        //主键
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },        
        //省份设置
        province:{   
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //状态(禁用或启用)
        state:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        
    },{
        sequelize,
        tableName:"province",
        modelName:"Province",
    });
    Province.sync();
    return model;
}