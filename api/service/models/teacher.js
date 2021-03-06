import { Sequelize, DataTypes , Model} from "sequelize";

//招生老师设置表
class Teacher extends Model { }

export default function ( sequelize , type){
    let model = Teacher.init({
        //账号ID
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        //招生老师
        teachername:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //招生年度
        year:{
            type:DataTypes.INTEGER,
            allowNull:false, 
        },
        //招生省份
        province:{   
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //招生城市
        city:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //创建时间
        date:{
            type: DataTypes.STRING,
            // defaultValue: Sequelize.NOW
        },
    },{
        sequelize,
        createdAt:false,
        updatedAt:false,
        tableName:"teacher",
        modelName:"Teacher",
    });
    Teacher.sync();
    return model;
}