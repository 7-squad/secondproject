import { Sequelize, Datatype , Model} from "sequelize";

//审核状态表
class Auditstatus extends Model { }

export default function ( sequelize , type){
    let model = Auditstatus.init({
        //主键：审核状态ID
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        //姓名
        name:{   
            type:DataTypes.STRING(20),
            allowNull:false,
        },
        //审核状态
        audit_status: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        //身份证材料审核状态
        id_card_state:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        // 贫困材料证明审核状态
        poor_state:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        //体检证明材料审核状态
        physical_state:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },{
        sequelize,
        tableName:"auditstatus",
        modelName:"Auditstatus",
    });
    User.sync();
    return model;
}