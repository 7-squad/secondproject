import { Sequelize, DataTypes, Model} from "sequelize";

//生源学校设置表
class School extends Model { }

export default function ( sequelize , type){
    let model = School.init({
        //主键
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        //省份
        province:{   
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //城市
        city:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        //所在地区
        region:{
            type:DataTypes.STRING,
            allowNull:false,
        }, 
        //毕业学校     
        sch_name:{   
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //创建时间
        start_time:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
    },{
        
        sequelize,
        createdAt:false,
        updatedAt:false,
        tableName:"school",
        modelName:"School",
    });
    School.sync();
    return model;
}