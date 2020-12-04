import Router from "koa-router";

const router = new Router();

router.get("/",async(ctx,next) =>{
    const {Plan} = ctx.orm("enrollnewstusystem");

    //查询数据
    let list =await Plan.findAll();
    if (list.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title:"招生计划设置",
            errorTitle:"查询失败",
            errorNote:"数据查询错误"

        });
        return;

    }
    ctx.type="text/json";
    ctx.body = JSON.stringify(list);
});
export default router;