import axios from 'axios';
import Circuit from '../pages/Circuit';

// 创建axios实例
const hn = axios.create({
    baseURL: 'https://www.nanshig.com/mobile/index.php'
});

// 二次封装(简化操作,维护方便)
async function get(params,config={}){
  let data = await Circuit.get('',{
    ...config,
    params
  });

  return data;
}

function post(data,config={}){
  return Circuit.post('',data,config);
}

export default {
  get,
  post
}