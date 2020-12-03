import { Sequelize, DataTypes , Model} from "sequelize";

//后台角色管理者
class Role extends Model { }

export default function ( sequelize , type){
    let model = Role.init({
        //主键
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        //编码
        code:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        //角色名称
        role_name:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        //创建人
        founder:{
            type:DataTypes.STRING(30),
            allowNull:false,
            defaultValue: "后台管理员",
        },
        //创建日期
        date:{
            type:DataTypes.INTEGER,
            

        },
        //修改人
        modified:{
            type:DataTypes.STRING(30),
            allowNull:false,
            defaultValue: "后台管理员",
        },
        //修改日期
        modified_date:{
            type:DataTypes.INTEGER,
            
        },
        //是否启用
        state:{
            type:DataTypes.STRING(20),
            allowNull:false,
        },
    },{
        sequelize,
        createdAt:false,
        updatedAt:false,
        tableName:"role",
        modelName:"Role",
    });
    Role.sync();
    return model;
}