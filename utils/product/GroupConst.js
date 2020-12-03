export let Fields = [
    {
        key: "selected",
        label: "选择",
        sortable: false,
    },
    {
        key: "id",
        label: "类型分组ID",
        sortable: true,
        sortDirection: "asc",
    },
    {
        key: "name",
        label: "类型分组名称",
        sortable: true,
        sortDirection: "asc",
    },
    {
        key: "des",
        label: "类型分组描述",
        sortable: true,
        sortDirection: "asc",
    },
    {
        key: "last_edit_user_id",
        label: "最后编辑人",
        sortable: true,
        sortDirection: "asc",
    },
    {
        key: "createdAt",
        label: "创建时间",
        sortable: true,
        sortDirection: "asc",
    },
    {
        key: "updatedAt",
        label: "最后编辑时间",
        sortable: true,
        sortDirection: "asc",
    },
    { key: "actions", label: "操作" },
];

export let FilterOption = [
    { id: 0, value: "id", label: "类型分组ID" },
    { id: 1, value: "name", label: "类型分组名称" },
    { id: 2, value: "des", label: "类型分组描述" },
    { id: 3, value: "last_edit_user_id", label: "最后编辑人" },
    { id: 4, value: "createdAt", label: "创建时间" },
    { id: 5, value: "updatedAt", label: "最后编辑时间" },
];

export let PageOption = [5, 10, 15, { value: 100, text: "更多" }];

export const Sort = {
    ASC: "asc",     // 升序
    DESC: "desc",   // 降序
    LAST: "last",   // 多列排序
}

export const Select = {
    SINGLE: "single",   // 单选
    MULTI: "multi",     // 多选
    RANGE: "range",     // 范围多选
}

