import { Sequelize, DataTypes , Model} from "sequelize";

//招生计划设计表
class Plan extends Model { }

export default function ( sequelize , type){
    let model = Plan.init({
        //主键
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },  
        //计划名称      
        name:{   
            type:DataTypes.STRING(40),
            allowNull:false,
        },
        //招生状态
        type:{
            type:DataTypes.STRING(40),
            allowNull:false,
            defaultValue: "高考类",
        },
        //招生年份
        year:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue: "2018",
        },
        //报名开始时间
        start_time:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        //报名结束时间
        end_time:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        //备注
        remarks:{
            type:DataTypes.STRING(40),
            allowNull:false,
            defaultValue: "待修改正在使用中",
        },
        //状态（启用或停用）
        state:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        
    },{
        sequelize,
        createdAt:false,
        updatedAt:false,
        tableName:"plan",
        modelName:"Plan",
    });
    Plan.sync();
    return model;
}