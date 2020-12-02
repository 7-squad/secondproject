import { Sequelize, DataTypes , Model} from "sequelize";

//表彰表
class Commendation extends Model { }

export default function ( sequelize , type){
    let model = Commendation.init({
        //主键
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        //手机号码
        tel_num:{   
            type:DataTypes.BIGINT(13),
            allowNull:false,
        },
        //推荐人
        rec:{   
            type:DataTypes.STRING(20),
            allowNull:false,
            defaultValue: "王老师",
        },
        //推荐人数
        rec_num:{   
            type:DataTypes.INTEGER,
            allowNull:false,            
        },
        //时间
        date:{
            type:DataTypes.INTEGER,
            allowNull:false, 
        },
        //表彰状态
        state:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
    },{
        sequelize,
        tableName:"commendation",
        modelName:"Commendation",
    });
    Commendation.sync();
    return model;
}