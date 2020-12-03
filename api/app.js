import path from "path";
import KOA from "koa";
import Body from "koa-body";
import Session from "koa-session";
import Router from "koa-router";
import ORM from "koa-orm";


import userManageRouter from "./router/userManage.js";
import userRouter from "./router/user.js";

const app = new KOA();



app.keys = [process.env.KOA_KEY];
console.log("process.env:%O",process.env);

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
router.use("/usermanage",userManageRouter.routes(),userManageRouter.allowedMeehods());

// 用户表
router.use("/user",userRouter.routes(),userRouter.allowedMeehods());



app.use(router.routes(),router.allowedMethods());

export default app.callback();