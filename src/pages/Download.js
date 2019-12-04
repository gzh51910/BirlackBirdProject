import React, { Component } from 'react';
import './Download.scss'

class Download extends Component {
    render() {
        return (
            <div className="Download">
                <img src="https://www.blackbirdsport.com/static/img/logo512.png" className="logo" />
                <p className="Download_title">黑鸟单车 骑行APP</p>
                <p className="Download_info">通过黑鸟单车，你可以利用GPS追踪骑行过程，参加各种活动、分享记录以及关注好友。</p>
                <div className="Download_img">
                    <img src="https://www.blackbirdsport.com/static/img/download-iphone.png"  />
                    <img src="https://www.blackbirdsport.com/static/img/download-android.png"  />
                </div>
                <img src="https://www.blackbirdsport.com/static/img/download-mobilephone.jpg" className="phone_img"/>
            </div>
        )
    }
}

export default Download