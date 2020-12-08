//将对象转换为表单格式数据

export default function(data){
    return Object.keys(data)
    .map((key) => {
        return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(data[key])
        );
    })
    .join("&");
}