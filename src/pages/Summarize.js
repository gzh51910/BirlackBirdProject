import React,{Component} from 'react';
import { Icon,Button } from 'antd';
import logo_green from '../img/logo512.png'
import '../scss/summarize.min.css'
class Summarize extends Component{
   state={
       userlist:[
           {
               user_head:logo_green,
               user_name:'哪个旮沓',
               time:'11小时前',
               title:"骑不动了，就休息，推车也不丢人",
               good:16,
               comment:12,
               img:logo_green
           },
            {
               user_head:logo_green,
               user_name:'哪个旮沓',
               time:'11小时前',
               title:"骑不动了，就休息，推车也不丢人",
               good:16,
               comment:12,
               img:logo_green
           },
           {
            user_head:logo_green,
            user_name:'哪个旮沓',
            time:'11小时前',
            title:"骑不动了，就休息，推车也不丢人",
            good:16,
            comment:12,
            img:logo_green
        }
       ]
   }
   close=()=>{
    document.querySelectorAll('.sum_head')[0].style.display='none'
   };
    render(){
        return(
            <div id="summarize">
                
                <header className="sum_head">
                <div className="lf">
                <Icon type="close" style={{fontSize:"20px"}} onClick={this.close}/>            
                <img src={logo_green} title="logo" />
                <aside>
                    <p>最美的骑行</p>
                    <p>用黑鸟小结</p>
                </aside>
                </div>
                <Button type="success" ghost target="http://www.blackbirdsport.com/resources/apk/blackbird_bike_an_current.apk">
                免费下载
                </Button>
                </header>
                <main>
                <ul>
                    {this.state.userlist.map((item,idx)=>{
                       return <li key={idx}>
                                <figure>
                                    <img src={item.user_head} />
                                    <figcaption>
                                      <p>{item.user_name}</p>
                                      <span>{item.time}</span>
                                    </figcaption> 
                                </figure>
                                <figure>
                                    <figcaption>
                                      <h2>{item.title}</h2>
                                      <p>
                                      <span>{item.good}赞</span>
                                      <span>{item.comment}评论</span>
                                      </p>
                                    </figcaption> 
                                    <img src={item.user_head}  />
                                </figure>
                             </li>
                    })}
                    
                </ul>
                </main>
            </div>
        )
    }
}

export default Summarize