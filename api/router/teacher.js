import Router from "koa-router";

const router = new Router();

router.get("/", async (ctx, next) => {
    const { Teacher } = ctx.orm("enrollnewstusystem");
    //查询数据
    let list = await Teacher.findAll();
    if (list.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title: "用户管理",
            errorTitle: "查询失败",
            errorNote: "数据查询错误"

        });
        return;

    }
    ctx.type = "text/json";
    ctx.body = JSON.stringify(list)
});

// 添加数据
router.get('/',async(ctx,next)=>{
    await ctx.render('/main')
})


router.post("/",async(ctx,next)=>{
    const { Teacher } = ctx.orm("enrollnewstusystem");
    let list = await Teacher.create();
})


export default router;