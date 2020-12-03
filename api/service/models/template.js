import { Sequelize,DataTypes , Model} from "sequelize";

//模板类型表
class Template extends Model { }

export default function ( sequelize , type){
    let model = Template.init({
        //主键
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        //模板类型
        type:{   
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        //模板照片
        goods: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        //创建时间
        start_time:{
            type:DataTypes.DATE,
            allowNull:false,
        },
    },{
        sequelize,
        createdAt:false,
        updatedAt:false,
        tableName:"template",
        modelName:"Template",
    });
    Template.sync();
    return model;
}