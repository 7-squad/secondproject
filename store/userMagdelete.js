import postbody from "~/utils/postbody.js"

const state = () => ({
    removeUsermanageObj:{},
})

const mutations = {
    setRemoveUsermanage(state, data){
        state.removeUsermanageObj = data;
    },
    
    clearRemoveUsermanageItem(state){
        console.log("清除删除的管理员数据：%O", state.removeUsermanageObj);
        state.removeUsermanageObj = null;
        
    },
}

const actions = {
    async removeUsermanage(context, page){
        console.log("跟服务器说删除id为: %O 的管理员", context.state.removeUsermanageObj.usermanageId);
        let body = postbody({id:context.state.removeUsermanageObj.usermanageId});
        let result = await fetch("/api/userManage/removeUsermanage",{
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
          }).then((res) => res.json());
          console.log("result: %O", result);

        // 删除成功需要清除管理员数据
        context.commit("clearRemoveUsermanageItem");

        // 获得操作数据，给页面反馈
        page.finishRemove(result);
        
    },
    async clearRemoveUsermanageItem(context , {page , data}){
        console.log("返回数据到页面",data);
        let idList = [];
        // debugger
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            idList.push(element.usermanageId)
        }
        let body = postbody({ids:JSON.stringify(idList)});
        let result = await fetch("/api/userManage/removeUsermanage",{
            method:"POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              },
            body,
        }).then((res) => res.json());
        if (page) page.finishRemove(result);
    },
        
    }

export {
    state,
    mutations,
    actions,
}