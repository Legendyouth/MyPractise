const Mock = require('mockjs');
const Random = Mock.Random;
export default params => {
    let page = params.body.match(/page=\d{1}/g)[0].split('=')[1];
    let list = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            id: i,
            uid: Random.integer(1, 20),
            author: Random.csentence(1, 2),
            title: Random.csentence(5, 10),
            content: Random.csentence(5, 100),
            created_at: Random.date() + ' ' + Random.time() 
        }
        list.push(newArticleObject)
    }
    return {
        errcode: 200,
        data: list,
        page,
        limit: 20,
        total: 100
    }
}