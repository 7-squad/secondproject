import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx, next) => {
    const { Teacher } = ctx.orm("enrollnewstusystem");
    //查询数据
    let teacherList = await Teacher.findAll();
    if (teacherList.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title: "招生老师设置",
            errorTitle: "查询失败",
            errorNote: "数据查询错误"

        });
        return;

    }
    ctx.body = JSON.stringify({
        result: true,
        teacherList,
    });
});
// 添加数据
// router.get('/',async(ctx,next)=>{
//     await ctx.render('/')
// })

// 添加数据
router.post("/", async (ctx, next) => {
    let { year, province, city, teacher } = ctx.request.body;
    ctx.type = "text/json";
    const { Teacher } = ctx.orm("enrollnewstusystem");

    let teacherList = await Teacher.findAll({ where: { teachername } });
    if (teacherList.length > 0) {
        ctx.status = 400;
        ctx.body = JSON.stringify({
            result: false,
            message: "老师已被安排",
        });
        return;
    }

    teacherlist = await Teacher.create({ year, province, city, teachername });;
    ctx.body = JSON.stringify({
        result: true,
        message: "创建成功",
        teacherList: teacherList,
    });
});

export default router;