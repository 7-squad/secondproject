const state = () => {
    return {
        // 所有添加的页面
        pages: [],
        // 当前显示的页面
        currentPage: null,
        // 学生详情数据 pages/studentinformation.vue 专用
        stuInfo:{},
    }
}

// 判断当前是否已有待添加的页面
function hasPage(state, page) {
    let pages = state.pages;
    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];
        if (element.index == page.index) {
            return true;
        }
    }
    return false;
}

const mutations = {
    // 每次点菜单，push 一个页面进来
    addPage(state, page) {
        if (!hasPage(state, page)) {
            state.pages.push(page)
        };
        // 将选择的页面显示
        state.currentPage = page;
    },

    removePage(state, name) {
        let newPages = state.pages;
        let currentPage = state.currentPage;
        // 如果删除的页面是当前显示的页面，当前显示的页面移动一下
        if (currentPage.index === name) {
            newPages.forEach((tab, index) => {
                if (tab.index === name) {
                    let nextTab = newPages[index + 1] || newPages[index - 1];
                    if (nextTab) {
                        state.currentPage = nextTab;
                    }
                }
            });
        }

        // 删除的页面
        state.pages = newPages.filter(item => item.index !== name);
    },

    setCurrtentPage(state, page) {
        let pages = state.pages;
        for (let index = 0; index < pages.length; index++) {
            const element = pages[index];
            if (element.index == page) {
                state.currentPage = element;
            }
        }
    },

    setStuInfo(state, data){
        state.stuInfo = data;
    }


}

export {
    state,
    mutations,
}