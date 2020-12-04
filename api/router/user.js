import Router from "koa-router";
import UUID from "../../utils/uuid.js";

const router = new Router();


router.get("/login", async (ctx, next) => {
    ctx.type = "text/json";
    let loginToken = UUID();
    ctx.session.loginToken = loginToken;
    ctx.session.loginTokenTime = new Date().getTime() + 1000 * 60 * 10;
    ctx.body = JSON.stringify({ token: loginToken });
})

router.post("/login", async (ctx, next) => {
    let { token, username, password } = ctx.request.body;
    ctx.type = "text/json";

    // 临时保存 token 相关数据
    let loginToken = ctx.session.loginToken;
    let loginTokenTime = ctx.session.loginTokenTime;
    // 清空 session 内 token 相关数据
    // 只要有一次请求，用户本身已有的 token 就失效
    ctx.session.loginToken = undefined;
    ctx.session.loginTokenTime = undefined;

    // 判断登陆令牌是否有效
    if (loginTokenTime <= Date.now()
        || token !== loginToken) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "Token 无效"
        });
        return;
    }

    // 用户名去空格
    username = username.trim();

    // 用户名有效性检验
    if (username.length < 4 || username.length > 20 ){
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "账号名称无效"
        });
        return;
    }
    // 密码有效性检验
    if (password.length < 6 || password.length > 20) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            code: "100000",
            title: "登录失败",
            message: "密码长度必须在6至20位之间"
        });
        return;
    }


    // 先获取 user 对应的模型 User
    // ctx.orm('store') 中的 store 就是 orm 框架当前配置名称
    // { User } 指 modelPath 设置文件夹中定义的模型中设置 modelName : User 的 user.js
    const { User } = ctx.orm('enrollnewstusystem');
    // 伪代码
    // SELECT * FROM user WHERE username=？， password=？
    let user = await User.findAll({
        where: {
            username,
            password
        }
    });
    if (user.length === 0) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            title: "登录失败",
            message: "账号不存在"
        });
        return;
    }
    user = user[0];
    if (password !== user.password) {
        ctx.status = 403;
        ctx.body = JSON.stringify({
            result: false,
            title: "登录失败",
            message: "密码错误"
        });
        return;
    }


    // 保存用户数据到 session 中
    ctx.session.user = user;

    ctx.status = 200;
    ctx.body = JSON.stringify({
        result: true,
        code: 200,
        title: "登录成功",
        message: `账号 ${username} 登录成功！`,
    });
});
export default router;