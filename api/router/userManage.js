import Router from "koa-router";

Router.get("/",async(ctx,next) =>{
    const {Usermanage} = ctx.orm("enrollnewstusystem");

    //查询数据
    let list =await Usermanage.findAll();
    if (list.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            title:"用户管理",
            errorTitle:"查询失败",
            errorNote:"数据查询错误"

        });
        return;

    }
    ctx.type="text/json";
    ctx.body = JSON.stringify(list)
});
export default router;