import {Sequelize,DataTypes,Model} from "sequelize";

class Usermanage extends Model{}


export default function (sequelize,type){
    let model = Usermanage.init({
        usermanageId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true,
        },
        userId:{
            type:DataTypes.INTEGER(50),
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        phonenum:{
            type:DataTypes.INTEGER(50),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        brith:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        role:{
            type:DataTypes.STRING(50),
            allowNull:false,  
        },
        usertype:{
            type:DataTypes.STRING(50),
            allowNull:false,  
        },
        states:{
            type:DataTypes.STRING(50),
            allowNull:false,  
        },
    },{
            sequelize,
            createdAt:false,
            updatedAt:false,
            tableName:"usermanage",
            modelName:"Usermanage",
        
    });
    Usermanage.sync();
    return model;
}