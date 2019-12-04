import React, { Component } from 'react';
import './CompetitionDetails.scss'
import { mainUrl } from "../config.json";
import { Tabs } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;



class CompetitionDetails extends Component {
    state = {
        data: {},
        commedList: []
    }
    async componentDidMount() {
        let { id } = this.props.match.params
        id = (id * 1).toFixed(1)
        let { data: { data: Competition } } = await axios.get(mainUrl + "/goods", {
            params: {
                gather: "Competition",
                condition: "activityId",
                condition_value: id
            }
        });

        let commedList = Competition

        this.setState({
            commedList
        })
    }
    goto=(id)=>{
        this.props.history.push(`/Enlist`)
        }
    render() {
        let { commedList } = this.state

        return (
            <div id="CompetitionDetails">
                {
                    commedList.map(item => {
                        //报名截止时间
                        let apply_endTime = new Date(item.closingEntryTime)
                        apply_endTime = `${apply_endTime.getFullYear()}-${apply_endTime.getMonth()}-${apply_endTime.getDate()} ${apply_endTime.getHours()}:${apply_endTime.getMinutes()}`

                        //比赛结束时间
                        let endTime = new Date(item.endTime)
                        endTime = `${endTime.getFullYear()}-${endTime.getMonth()}-${endTime.getDate()} ${endTime.getHours()}:${endTime.getMinutes()}`

                        console.log(item);

                        return <div key={item._id}>
                            <div className="CompetitionDetails_top">
                                <img src={item.activityPhoto} />
                                <div className="CompetitionDetails_top_info">
                                    <p className="CompetitionDetails_title">{item.activityTitle}</p>
                                    <p>线路	<span>{item.circuit}</span></p>
                                    <p>报名截止时间	<span>{apply_endTime}</span></p>
                                    <p>比赛时间	<span>{endTime} 至 {item.startTime}</span></p>
                                    <p>地点	<span>{item.assemblyAddress}</span></p>
                                    <img src="http://pics.blackbirdsport.com/album/201909/3168281_1568717529111.png" />
                                </div>
                            </div>
                            <div className="CompetitionDetails_main">
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="详情" key="1">
                                        <div className="difficulty">
                                            <p>难度</p>
                                            <p>里程 15km 爬升 500m</p>
                                        </div>
                                        <div className="arrange">
                                            <p className="arrange_title">活动安排</p>
                                            <div className="html_sj" dangerouslySetInnerHTML={{ __html: item.schedule }}></div>
                                        </div>
                                        <div className="attention">
                                            <p className="attention_title">注意事项</p>
                                            <p className="attention_cont">{item.note}</p>
                                        </div>
                                        <div className="disclaimer">
                                            <p className="disclaimer_title">注意事项</p>
                                            <p className="disclaimer_cont">赛前签署免责协议</p>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="报名名单" key="2">
                                        <div className="apply_list">
                                            <table border="1">
                                                <thead>
                                                    <tr>
                                                        <td>姓名</td>
                                                        <td>组织</td>
                                                        <td>报名日期</td>
                                                        <td>报名状态</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>周**</td>
                                                        <td>逍遥组</td>
                                                        <td>2019.11.12 22：52：23</td>
                                                        <td>已用过</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="评论" key="3">
                                        <div className="apply_comment">
                                            <dl>
                                                <dt>
                                                    <img src="http://pics.blackbirdsport.com/album/201906/c_5263850_1559472793991jpg@200w_200h"/>
                                                </dt>
                                                <dd>燕州～城市  F1 ！</dd>
                                                <dd>很想参加</dd>
                                            </dl>
                                            <span>5天前</span>
                                        </div>
                            </TabPane>
                                </Tabs>
                            </div>
                            <div className="CompetitionDetails_footer">
                            </div>
                            <div className="CompetitionDetails_main_bottom">
                                      <h3>观看直播</h3>
                                      <h4 onClick={this.goto.bind(this,item.activtyId)}>立即报名</h4>
                            </div>
                        </div>
                    })
                }
                  
            </div>
        )
    }
}

export default CompetitionDetails