import postBody from "~/utils/postbody.js"

const state = () => ({
    user: null,
    result: {
        result: false,
        code: "",
        title: "",
        message: "",
    },
    // 页面登陆状态显示内容
    message:"",
})

const mutations = {
    setUser(state, user) {
        state.user = user;
    },

    setLoginResult(state, result){
        state.result = result;
    },

    setMessage(state, message){
        state.message = message;
    },

    logout(state) {
        state.user = null;
    }
}

const actions = {
    // 所有页面请求服务器数据，都用 action 去实现
    async doLogin(context, { data, page }) {
        console.log("context: %O", context);
        console.log("data: %O", data);

        let body = postBody(data);
        console.log(body);
        let result = await fetch("/api/user/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        let obj = {};
        // Object.assign 将 第一个参数后的对象的数据值更新 到第一个里面 
        // context.state.result内的key 和 value、  result内的key 和 value 都会被复制进 obj
        Object.assign(obj, context.state.result, result);
        console.log("obj: %O", obj);
        // 保存登陆请求状态
        // context.commit("setLoginResult", obj);
        // 记录用户数据
        if(result.result){
            context.commit("setUser", result.user);
            sessionStorage.setItem("user", JSON.stringify(result.user));
        }
        page.finishLogin(result);
    },

    async doSignin(context, { data, page }) {
        console.log("context: %O", context);
        console.log("data: %O", data);

        let body = postBody(data);
        console.log(body);
        let result = await fetch("/api/user/signin", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        let obj = {};
        // Object.assign 将 第一个参数后的对象的数据值更新 到第一个里面 
        // context.state.result内的key 和 value、  result内的key 和 value 都会被复制进 obj
        Object.assign(obj, context.state.result, result);
        console.log("obj: %O", obj);
        // 保存登陆请求状态
        // context.commit("setLoginResult", obj);
        // 记录用户数据
        if(result.result){
            context.commit("setUser", result.user);
            sessionStorage.setItem("user", JSON.stringify(result.user));
        }
        page.finishSignin(result);
    }
}

export {
    state,
    mutations,
    actions
}