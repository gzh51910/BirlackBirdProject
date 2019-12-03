import React, { Component } from 'react';
import './CircuitDetails.scss'
import { Carousel } from 'antd';
import { Tabs } from 'antd';
import { mainUrl } from "../config.json";
import axios from 'axios';
const { TabPane } = Tabs;




class CircuitDetails extends Component {
    state = {
        data: {},
        commedList: []
    }
    async componentDidMount() {
        let { id } = this.props.match.params
        id = (id * 1).toFixed(1)
        let { data: { data: CircuitDetails } } = await axios.get(mainUrl + "/goods", {
            params: {
                gather: "Circuit_Details",
                condition: "id",
                condition_value: id
            }
        })
        let commedList = CircuitDetails

        this.setState({
            commedList
        })

    }
    render() {
        let { commedList } = this.state
        // console.log(commedList);



        return (
            <div className="CircuitDetails">
                {
                    commedList.map(item => {
                        // console.log(item.oImgArr);
                        return <div key={item.id}>
                            <div className="CircuitDetails_img">
                                <Carousel>
                                    {
                                        item.oImgArr.map((item_a, idx) => {
                                            return <div key={idx}>
                                                <h3>
                                                    <img src={item_a} />
                                                </h3>
                                            </div>
                                        })
                                    }
                                </Carousel>,
               </div>
                            <div className="CircuitDetails_info">
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="资料" key="1">
                                        <div className="CircuitDetails_info_mian">
                                            <div className="mian_top">
                                                <dl>
                                                    <dt>
                                                        <img src={item.gr_img} />
                                                    </dt>
                                                    <dd>{item.gr_title}</dd>
                                                    <dd>{item.gr_site}</dd>
                                                </dl>
                                                <span>{item.gr_time}</span>
                                            </div>
                                            <div className="main_info">
                                                <p className="main_info_title">线路介绍</p>
                                                <p className="main_info_cont">{item.circuit}</p>
                                            </div>
                                            <div className="main_ballplayer">
                                                <p className="lately">最近骑过</p>
                                                {
                                                    item.info_lately.map((item, idx) => {
                                                        return <dl key={idx}>
                                                            <dt>
                                                                <img src={item.tx} />
                                                            </dt>
                                                            <dd>{item.id}</dd>
                                                        </dl>
                                                    })
                                                }
                                            </div>
                                            <div className="nearby">
                                                <p className="nearby_title">附近路书</p>
                                                <dl className="nearby_left">
                                                    <dt>
                                                        <img src={item.nearby_left_img} />
                                                    </dt>
                                                    <dd>{item.nearby_left_title}</dd>
                                                    <dd>{item.nearby_left_gl}</dd>
                                                    <dd>{item.nearby_left_bh}</dd>
                                                </dl>
                                                <dl className="nearby_right">
                                                    <dt>
                                                        <img src={item.nearby_right_img} />
                                                    </dt>
                                                    <dd>{item.nearby_right_id}</dd>
                                                    <dd>{item.nearby_right_dz}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="评论" key="2">
                                        <div className="discuss">
                                            <div className="discuss_cont">
                                                {
                                                    item.comment.map((item, idx) => {
                                                        return <dl key={idx}>
                                                            <dt>
                                                                <img src={item.pl_gr_img} />
                                                            </dt>
                                                            <dd>{item.pl_gr_id}</dd>
                                                            <dd>{item.pl_gr_cont}</dd>
                                                            <dd><span>{item.pl_gr_time}</span></dd>
                                                            <dd>
                                                                <img src={item.pl_gr_src} className="gr_src"/>
                                                            </dd>
                                                            <dd>
                                                                <img src={item.pl_gr_src1}/>
                                                            </dd>
                                                        </dl>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default CircuitDetails