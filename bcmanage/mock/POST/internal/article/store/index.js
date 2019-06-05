const Mock = require('mockjs');
const Random = Mock.Random;
export default params => {
    let newObject = {
        id: Random.integer(1, 20)
    }
    return {
        errcode: 200,
        data: newObject,
        errmsg: "操作成功."
    }
}