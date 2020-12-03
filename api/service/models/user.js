import { Sequelize, DataTypes, Model } from "sequelize";

// 定义一个user class 用来映射 数据库中的user表
class User extends Model {}

// 初始化user 内部的字段映射
export default function(sequelize, type) {
    let model= User.init({
      // 账号id
      id: {
        type: DataTypes.INTEGER,    //数据库里面的类型是int

        primaryKey: true,    // 索引键

        allowNull: false,    // not null

        autoIncrement: true,    // 自动增加值

        unique: true    //独特且唯一
      },
      // 密码
      password: {
        type: DataTypes.STRING(32),    //数据库里面的类型是VARCHAR(20)
        allowNull: false    //not null
      },
      // 姓名
      username: {
        type: DataTypes.STRING(20),    //数据库里面的类型是varchat(20)
        allowNull: false,    //not null
        unique: true    //独特且唯一
      },

      
    //   性别
      gender: {
        type: DataTypes.INTEGER({length: 1}),
        unique: true,
    },
    // 手机号码
phone: {
    type: DataTypes.STRING(11),     // 数据库内类型是 VARCHAR(11)
    unique: true,               // 独特唯一
},
brith:{
    type:DataTypes.DATE,
    allowNull:true,
},
// 工作单位
unit: {
    type: DataTypes.STRING,
    allowNull:true,
},
// 工作地址
area: {
    type: DataTypes.STRING,
    allowNull:true,
},
      
    },
    {
      // orm框架的实例
    
      sequelize,     // 将使用sequelize 初始化这个User的定义
      
      tableName: "user",   // 指定对应的数据表为user表
      
      modelName: "User",   // 指定模块名称为 User

     
      createdAt: false,   // 不要自动创建createdAt字段
      updatedAt: false,     // 不要自动创建updateAt字段 
    });
    User.sync();
    return model;
}

