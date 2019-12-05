import React, { Component } from 'react';
import './Download.scss'
import Img from '../img/download.png'
import $ from 'jquery'

class Download extends Component {
    render() {
        return (
            <div className="Download" onClick={()=>{$(".ewm_box").css("display", "none")}}>
                <img src="https://www.blackbirdsport.com/static/img/logo512.png" className="logo" />
                <p className="Download_title">黑鸟单车 骑行APP</p>
                <p className="Download_info">通过黑鸟单车，你可以利用GPS追踪骑行过程，参加各种活动、分享记录以及关注好友。</p>
                <div className="Download_img">
                    <img src="https://www.blackbirdsport.com/static/img/download-iphone.png" onClick={(e) => {
                         e.stopPropagation()
                        $(".ewm_box").css("display", "block")
                    }} />
                    <div className="ewm_box">
                        <p>扫码打开下载页面。微信微博用户扫码后，请在手机右上角选择用手机浏览器打开。</p>
                        <img src={Img} />
                    </div>
                    <img src="https://www.blackbirdsport.com/static/img/download-android.png" />
                </div>
                <img src="https://www.blackbirdsport.com/static/img/download-mobilephone.jpg" className="phone_img" />
            </div>
        )
    }
}

export default Download