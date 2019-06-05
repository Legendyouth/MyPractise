import Axios from 'axios';
import qs from 'qs';
export default function(origin, params, request) {
    return Axios[request || 'post'](origin, qs.stringify(params)).then(function(res) {
        return new Promise((resolve, reject) => {
            if (res.status === 200) {
                resolve(res.data)
            }
            else {
                reject('请求失败')
            }
        })
    });
}