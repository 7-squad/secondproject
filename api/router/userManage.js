import Router from "koa-router";


const router = new Router();

router.get("/",async(ctx,next) =>{
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

router.post("/removeUserManage", async ctx => {
    let id = ctx.request.body;
    console.log("id: %O", id);

    const { Usermanage } = ctx.orm("enrollnewstusystem");
    let deleteRoles = await Usermanage.findAll({
        where: {
            usermanageId: id
        }
    });

    if (deleteRoles.length === 0) {
        ctx.status = 500;
        ctx.type = "text/json";
        ctx.body = JSON.stringify({
            result: false,
            message: "不存在指定的管理员数据"
        })
        return;
    }

    console.log("deleteRoles: %O", deleteRoles);
    for (let index = 0; index < deleteRoles.length; index++) {
        const element = deleteRoles[index];
        // 删除管理员数据
        await element.destroy();
    }
    ctx.status = 400;
    ctx.type = "text/json";
    ctx.body = JSON.stringify({
        result: true,
        message: "删除成功",
        deleteRoles: deleteRoles,
    })
});

export default router;