import React,{Component} from 'react';
import { Carousel } from 'antd';
import './Home.scss'
import bg1 from '../img/bg_loading_vsys.jpg'
import bg2 from '../img/bg-homepage-bb10s.jpeg'
import logo from '../img/logo512.png'
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
                <img src={logo} title="logo" className="Home_logo"/>
            </div>
        )
    }
}

export default Home