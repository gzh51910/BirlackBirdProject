import React, { Component } from 'react';
// import {hn} from '../api'
// import { Card } from 'antd';
import './Competition.scss';
import { mainUrl } from '../config.json'
import axios from 'axios';
// import { log } from 'util';

class Competition extends Component {
    state = {
        data: {},
        commedList: []
    }
    goto = (id)=>{
        this.props.history.push(`/competitionDetails/${id}`)
    }
    async componentDidMount() {
        let { data: { data: Competition } } = await axios.get(mainUrl + "/goods", {
            params: {
                gather: "Competition"
            }
        });
        let commedList = Competition
        this.setState({
            commedList
        })
    }
    render() {
        let { commedList } = this.state
        return (
            <div id="competition">
                {
                    commedList.map(item => {
                        return <div className="competition_list" key={item._id} onClick={this.goto.bind(this,item.activityId)}>
                            <p className="bmqk" style={item.activityStatus == "报名中" ? { background: "#58bc58" } : { background: "#999" }}>{item.activityStatus}</p>
                            <img src={item.activityPhoto} />
                            <p className="competition_title">{item.activityTitle}</p>
                            <p className="competition_time">时 间：<span>{item.startTime}</span></p>
                            <p className="competition_sponsor">主办方：<span>{item.organizerTitle}</span></p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Competition