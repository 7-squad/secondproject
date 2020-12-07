import { Sequelize, DataTypes, Model } from "sequelize";

class Stuinformation extends Model { }


export default function (sequelize, type) {
    let model = Stuinformation.init({
        // 1学生ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true, //自动增加值
            unique: true,        //独特且唯一
        },
         // 2招生年度
         year: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
        },
        // 3推荐专业（专业名称）
        major: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // 4姓名
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
         // 5联系电话
         telphone: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
        },
        // 6身份证号码
        Idcard: {
            type: DataTypes.INTEGER(100),
            allowNull: false,
        },
        // 7所在地区（高考省份/城市）
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // 8是否贫困生
        PoorStudents: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // 9审核状态
        state: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        // 性别
        sex: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
       
        // 招生类型
        type: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        // 科目类型
        Subject: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        
        
        // 毕业学校
        graduation: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        // 模拟考试成绩
        grades: {
            type: DataTypes.INTEGER(50),
            allowNull: true,
        },
        // 推荐方式
        recommended: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        tableName: "stuinformation",
        modelName: "Stuinformation",

    });
    Stuinformation.sync();
    return model;
}