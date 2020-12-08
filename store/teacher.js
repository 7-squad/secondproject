import postBody from "~/utils/postbody.js"

const state = () => ({
    teachers: [],
    teacher: {
        teachername: "",
        year: "",
        province: "",
        city: "",
    },
})

const mutations = {
    setTeacherList(state, teachers) {
        state.teachers =  teachers;
    },
    setTeacher(state, teacher) {
        state.teacher = teacher;
    },
    setTeachername(state, teachername) {
        state.teachers.teachername = teachername;
    },
    setYear(state, year) {
        state.teachers.year = year;
    },
    setProvince(state, province) {
        state.teachers.province = province;
    },
    setCity(state, city) {
        state.teachers.city = city;
    },
}

const actions ={
    async getTeacherList(context, page) {
        let result = await fetch("/api/teacher", {
            method: "GET",
        }).then((res) => res.json());
        if (result.result) {
            context.commit("setTeacherList", result.teacherList);
        } else { 
            context.commit("setTeacherList", []);
        }
        // if (page) page.finishGetTeacherList(result);
    },
    async addTeacherList(context,{data, page}) {
          let body =postBody(data);
        let result = await fetch(`/api/teacher`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        context.commit("setTeacher", result.teacher);
        // page.finishAddTeacher(result);
    },
}
export {
    state,
    mutations,
    actions,
}