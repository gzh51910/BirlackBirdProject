import React,{Component} from "react";
import './RealSystem.scss';

class RealSystem extends Component{
    render(){
        return(
              <div className="RealSystem">
              <video src="http://download.blackbirdsport.com/video/viscene/hp-4.mp4" type="video/mp4" poster="false.png" 
                    autoPlay="autoPlay" loop="-1">
                 </video>
                 <p className="title">浸入式骑行体验 足不出户 骑遍天下</p>
                 <div className="main1">
                   <div className="Mac">
                 <img src="http://www.viscene.net/static/vsys/img/mac.png" className="image1"></img>
                 <div className="Mac_bottom">
                     下载
                 </div>
                 </div>
                 <div className="Window">
                 <img src="http://www.viscene.net/static/vsys/img/windows.png" className="image1"></img>
                 <div className="Window_bottom">
                     下载
                 </div>
                 </div>
                 </div>

                 <div className="main2">
                     <div className="center1">
                         <a>.net framework 4.5升级安装包</a>
                         <a>ant+适配器驱动下载</a>
                     </div>
                     <div className="center2">
                        <a>Viscene安装使用视频</a>
                        <a>ANT+适配器驱动安装说明</a>
                     </div>
                 </div>
                 
                 <ul className="nav">
                     <li>
                         <div className="img">
                             <a href="">
                                 <img src="http://www.viscene.net/static/vsys/img/keep-indoors.png"></img>
                             </a>
                         </div>
                         <div className="nav_title">
                             <h2>浸入式体验</h2>
                             <p>高清实地线路拍摄</p>
                             <p>浸入式骑行体验更真实</p>
                             <p>全球线路不断更新</p>
                             <p>足不出户</p>
                             <p>带你骑遍天下</p>
                         </div>
                     </li>
                     <li>
                         <div className="nav_title">
                             <h2>骑行体验更真实</h2>
                             <p>基于骑行功率输出</p>
                             <p>综合体重、坡度、风阻等</p>
                             <p>实地因素的综合算法</p>
                             <p>真实还原骑行体验</p>
                         </div>
                         <div className="img">
                             <a href="">
                                 <img src="http://www.viscene.net/static/vsys/img/real-experience.png"></img>
                             </a>
                         </div>
                     </li>
                     <li>
                         <div className="img">
                             <a href="">
                                 <img src="http://www.viscene.net/static/vsys/img/ant.png"></img>
                             </a>
                         </div>
                         <div className="nav_title">
                             <h2>超强兼容性</h2>
                             <p>各式骑行台</p>
                             <p>标准ANT+外接设备全部兼容</p>
                             <p>让你最快嗨起来</p>
                         </div>
                     </li>
                     <li> 
                         <div className="nav_title">
                             <h2>团队骑行更好玩</h2>
                             <p>单人多人都能骑</p>
                             <p>虚拟形象进实景</p>
                             <p>团队骑行更好玩</p>
                         </div>
                         <div className="img">
                             <a href="">
                                 <img src="http://download.blackbirdsport.com/video/viscene/VideoWindow%202018-07-20%2016_48_46%20%283%29.gif"></img>
                             </a>
                         </div>
                     </li>
                     <li>
                         <div className="img">
                             <a href="">
                                 <img src="http://www.viscene.net/static/vsys/img/data-sync-1.png"></img>
                             </a>
                         </div>
                         <div className="nav_title">
                             <h2>数据同步</h2>
                             <p>骑行数据同步到</p>
                             <p>黑鸟社区</p>
                             <p>积分勋章</p>
                         </div>
                     </li>
                 </ul>




                 </div>
          
        )
    }
}


export default RealSystem