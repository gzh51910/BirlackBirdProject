import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import logo_green from '../img/logo512.png'
import '../scss/summarize.min.css'
import axios from 'axios';
import { mainUrl } from '../config';


class Summarize extends Component {
    state = {
        userlist: []
    }
    close = () => {
        document.querySelectorAll('.sum_head')[0].style.display = 'none'
    };
    async componentDidMount() {
        let { data: { data: Summary } } = await axios.get(mainUrl + '/goods', {
            params: {
                gather: "Summary",
                page: 1,
                size: 100
            }
        });
        let userlist = Summary
        this.setState({
            userlist
        })
    }
    render() {
        let {userlist} = this.state
        return (
            <div id="summarize">

                <header className="sum_head">
                    <div className="lf">
                        <Icon type="close" style={{ fontSize: "20px" }} onClick={this.close} />
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
                        {this.state.userlist.map((item, idx) => {
                            return <li key={idx}>
                                <figure>
                                    <img src={item.titleSrc} />
                                    <figcaption>
                                        <p>{item.id}</p>
                                        <span>{item.time}</span>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <figcaption>
                                        <h2>{item.cont}</h2>
                                        <p>
                                            <span>{item.praise}</span>
                                            <span>{item.pl}</span>
                                        </p>
                                    </figcaption>
                                    <img src={item.img} />
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