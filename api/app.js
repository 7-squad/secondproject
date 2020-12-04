import path from "path";
import KOA from "koa";
import Body from "koa-body";
import Session from "koa-session";
import Router from "koa-router";
import ORM from "koa-orm";


import userManageRouter from "./router/userManage.js";
// 发布表彰 - 
import commendationRouter from "./router/commendation.js";
// 招生计划设置
import stuplanRouter from "./router/stuplan.js";
import userRouter from "./router/user.js";
import schoolRouter from "./router/school.js";
import teacherRouter from "./router/teacher.js";
import roleRouter from "./router/role.js";
import provinceRouter from "./router/province.js";

import auditstatusRouter from "./router/auditstatus.js";
const app = new KOA();



app.keys = [process.env.KOA_KEY];
// console.log("process.env:%O",process.env);

const ormConfig ={
    name:process.env.ORM_NAME,
    modelPath:path.join(path.resolve("./"),process.env.DATABASE_MODEL_PATH),
    database: process.env.DATABASE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,    port: parseInt(process.env.DATABASE_PORT),
    pool: {
        max: parseInt(process.env.DATABASE_POOL_MAX),
        min: parseInt(process.env.DATABASE_POOL_MIN),
        // 数据库连接最大空闲回收时间
        idle: parseInt(process.env.DATABASE_POOL_IDLE),
    }
};
const orm =ORM(ormConfig);
app.use(orm.middleware);

const SessionConfig ={
    key:process.env.KOA_SESSION_KEY,
    maxAge:parseInt(process.env.KOA_SESSION_MAXAGE),
}
app.use(Session(SessionConfig,app));

const bodyParser =new Body();
app.use(bodyParser);

const router = new Router();
// router.use("/", rootRouter.routes(), rootRouter.allowedMethods());

// 发布表彰
router.use("/commendation",commendationRouter.routes(),commendationRouter.allowedMethods());

// 用户表
router.use("/user",userRouter.routes(),userRouter.allowedMeehods());

// 招生计划设置
router.use("/stuplan",stuplanRouter.routes(),stuplanRouter.allowedMethods());


router.use("/usermanage",userManageRouter.routes(),userManageRouter.allowedMethods());
router.use("/school",schoolRouter.routes(),schoolRouter.allowedMethods());
router.use("/teacher",teacherRouter.routes(),teacherRouter.allowedMethods());
router.use("/role",roleRouter.routes(),roleRouter.allowedMethods());
router.use("/province",provinceRouter.routes(),provinceRouter.allowedMethods());
router.use("/auditstatus",auditstatusRouter.routes(),auditstatusRouter.allowedMethods());
app.use(router.routes(),router.allowedMethods());

export default app.callback();