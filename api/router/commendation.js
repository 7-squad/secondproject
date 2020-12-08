import Router from "koa-router";

const router = new Router();

router.get("/",async(ctx,next) =>{
    const {Commendation} = ctx.orm("enrollnewstusystem");

    //查询数据
    let list =await Commendation.findAll();
    if (list.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            result: false,
            title:"发布表彰",
            errorTitle:"查询失败",
            errorNote:"数据查询错误"

        });
        return;

    }
    ctx.type="text/json";
    ctx.body = JSON.stringify({
        result:true,
        list
    })
});
export default router;