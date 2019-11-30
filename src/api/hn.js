import axios from 'axios';

// 创建axios实例
const hn = axios.create({
    baseURL: 'https://www.nanshig.com/mobile/index.php'
});

// 二次封装(简化操作,维护方便)
async function get(params,config={}){
  let data = await hn.get('',{
    ...config,
    params
  });

  return data;
}

function post(data,config={}){
  return hn.post('',data,config);
}

export default {
  get,
  post
}