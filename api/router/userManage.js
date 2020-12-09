import Router from "koa-router";


const router = new Router();
//添加数据
router.post("/", async (ctx, next)=>{
    let {userId,name,phonenum,email,brith,role,usertype,states} = ctx.request.body;
    ctx.type = "text/json";

    let { Usermanage } = ctx.orm("enrollnewstusystem");
    let list = await Usermanage.create({
        // 数据库的字段名：页面prop名称
        userId:userId,
        name:name,
        phonenum:phonenum,
        email:email,
        brith:brith,
        role:role,
        usertype:usertype,
        states:states
        });

    //设定返回的类型 是文本的 json
    ctx.type = "text/json";
    // 页面接受的数据
    ctx.body = JSON.stringify({
        result:true,
        message:"添加用户管理记录成功",
        list:list
        
    });
});

router.get("/",async(ctx,next) =>{
    const {Usermanage} = ctx.orm("enrollnewstusystem");

    //查询数据
    let list =await Usermanage.findAll();
    if (list.length <= 0) {
        ctx.status = 500;
        ctx.body = JSON.stringify({
            result: false,
            title:"用户管理",
            errorTitle:"查询失败",
            errorNote:"数据查询错误",
        });
        return;

    }
    ctx.type="text/json";
    ctx.body = JSON.stringify({
        result:true,
        list
    })
});

router.post("/removeUserManage", async ctx => {
    let {ids} = ctx.request.body;
    console.log("id: %O", ids);

    ids = JSON.parse(ids);

    const { Usermanage } = ctx.orm("enrollnewstusystem");
    let deleteRoles = await Usermanage.destroy({
        where: {
            usermanageId: ids
        }
    });

    if (deleteRoles === 0) {
        ctx.status = 500;
        ctx.type = "text/json";
        ctx.body = JSON.stringify({
            result: false,
            message: "不存在指定的管理员数据"
        })
        return;
    }
    ctx.status = 400;
    ctx.type = "text/json";
    ctx.body = JSON.stringify({
        result: true,
        message: "删除成功",
    })
});

export default router;