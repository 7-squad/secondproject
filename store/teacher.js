
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
    setteacher(state, teacher) {
        state.teacher = teacher;
    },
    setteachername(state, teachername) {
        state.teachers.teachername = teachername;
    },
    setyear(state, year) {
        state.teachers.year = year;
    },
    setprovince(state, province) {
        state.teachers.province = province;
    },
    setcity(state, city) {
        state.teachers.city = city;
    },
}

const actions ={
    async getTeacherList(context, page) {
        let result = await fetch("/api/teacher", {
            method: "GET",
        }).then((res) => res.json());
        if (result.teacherList) {
            context.commit("setTeacherList", result.TeacherList);
        } else { 
            context.commit("setTeacherList", []);
        }
        if (page) page.finishGetTeacherList(result);
    },
    async addTeacherList(context, { data, page }) {
        let result = await fetch(`/api/teacher`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        context.commit("setTeacher", result.teacher);
        page.finishAddTeacher(result);
    },
}
export {
    state,
    mutations,
    actions,
}