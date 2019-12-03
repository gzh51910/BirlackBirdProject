import axios from 'axios';

const hn_xianlu  = axios.create({
    baseUrl:'http://www.blackbirdsport.com/public/api/routes/1872/'
});

async function get(params,config={}){
    let {content}= await hn_xianlu.get("streams",{
        ...config,
        params
    });
    return content;
}

export default {
    get
}