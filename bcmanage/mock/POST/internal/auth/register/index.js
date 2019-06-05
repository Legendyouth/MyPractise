const Mock = require('mockjs');
const Random = Mock.Random;
export default params => {
    let newObject = {
        uid: Random.integer(30, 40),
        username: Random.csentence(1, 4)
    }
    return {
        errcode: 200,
        data: newObject,
        errmsg: ''
    }
}