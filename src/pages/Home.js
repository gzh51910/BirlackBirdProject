import React,{Component} from 'react';
import { Carousel } from 'antd';
import './Home.scss'
import bg1 from '../img/bg_loading_vsys.jpg'
import bg2 from '../img/bg-homepage-bb10s.jpeg'
import logo from '../img/logo512.png'
import android from "../img/download-android.png"
import ios from "../img/download-iphone.png"
import banner from "../img/download-mobilephone.jpg"
class Home extends Component{
    render(){
        return(
            <div id="home">
               <Carousel autoplay className="Home_nav">
                    <div>
                    <img src={bg1} title="走马灯"/>
                    </div>
                    <div>
                    <img src={bg2} title="走马灯"/>
                    </div>
                </Carousel>
                <section id="home_main">
                <img src={logo} title="logo" className="Home_logo"/>
                <h1 style={{fontSize:"36px"}}>黑鸟单车 骑行APP</h1>
                <p style={{textAlign:"center"}}>通过黑鸟单车，你可以利用GPS追踪骑行过程，参加各种活动、分享记录以及关注好友。</p>
                <img src={android} title="安卓下载"/>
                <img src={ios} title="苹果下载"/>
                <img src={banner} title="手机了解" className="mobile"/>
                </section>
            </div>
        )
    }
}

export default Home