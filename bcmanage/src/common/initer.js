import Axios from 'axios';
import qs from 'qs';
import hashConf from './hashConf.js';

export default {
    getOptId() {
        Axios.post('', qs.stringify()).then(res => {

        })
    }
}