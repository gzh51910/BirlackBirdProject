import React from 'react';
import { Icon } from 'antd';
import App from '../scss/App.min.css'

let Styles = {
    Hh:{
        'display':'flex',
        'width':'100%',
        'justify-content':"space-between",
        'align-items': 'center'
    }
}
function AppHeader({datalist,history}){

    return(<div id="Home_header" style={App.Home_header}>
        <a href="/"title="黑鸟体育">
            <img src='./img/blackbird-icon-green.png'/>
        </a>
        <div style={{background:"#333",textAlign:'center',border:'1px solid #fff',borderRadius:'4px'}}>
       <Icon type="menu" style={{fontSize:'20px',lineHeight:'22px', color:"#FFF",height:"20px",boxSizing:"border-box",width:'34px'}} /></div>
    </div>
    ) 
    
        
}

export default AppHeader;
