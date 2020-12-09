import postBody from "~/utils/postbody.js"

const state = () => ({
    usermags: [],
    usermag: {
        userId: "",
        name: "",
        phonenum: "",
        email: "",
        brith: "",
        role: "",
        usertype: "",
        states: "",
    },
})

const mutations = {
    setUsermags(state, usermags) {
        state.usermags =  usermags;
    },
    setUsermag(state, usermag) {
        state.usermag = usermag;
    },
    setUserId(state, userId) {
        state.usermags.userId = userId;
    },
    setName(state, name) {
        state.usermags.name = name;
    },
    setPhonenum(state, phonenum) {
        state.usermags.phonenum = phonenum;
    },
    setEmail(state, email) {
        state.usermags.email = email;
    },
    setBrith(state, brith) {
        state.usermags.brith = brith;
    },
    setRole(state, role) {
        state.usermags.role = role;
    },
    setUsertype(state, usertype) {
        state.usermags.usertype = usertype;
    },
    setState(state, states) {
        state.usermags.states = states;
    }
}

const actions ={
    async getUsermags(context, page) {
        let result = await fetch("/api/userManage", {
            method: "GET",
        }).then((res) => res.json());
        if (result.result) {
            context.commit("setUsermags", result.list);
        } else { 
            context.commit("setUsermags", []);
        }
        // if (page) page.finishGetTeacherList(result);
    },
    async addUsermagList(context,{data, page}) {
          let body =postBody(data);
        let result = await fetch(`/api/userManage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        context.commit("setUsermag", result.usermag);
        // page.finishAddTeacher(result);
    },
}
export {
    state,
    mutations,
    actions,
}