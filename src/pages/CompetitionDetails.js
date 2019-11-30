import React, { Component } from 'react';
import './CompetitionDetails.scss'

class CompetitionDetails extends Component {
    state = {
        data: {},
        commedList:[]
    }
    render() {
        return (
            <div id="CompetitionDetails">
                <div className="CompetitionDetails_top">
                    <img src="http://pics.blackbirdsport.com/stream/201910/201910151624480169423.jpeg" />
                    <div className="CompetitionDetails_top_info">
                        <p className="CompetitionDetails_title">2019中国▪延平（高坪）国际自行车爬坡赛 暨南平市第九届环延平湖全国自行车爬坡赛</p>
                        <p>线路	<span>比赛线路详见线路图</span></p>
                        <p>报名截止时间	<span>2019-12-20 00:00</span></p>
                        <p>比赛时间	<span>2019-12-29 10:00 至 12-29 11:30</span></p>
                        <p>地点	<span>高坪风景区</span></p>
                        <img src="http://pics.blackbirdsport.com/album/201909/3168281_1568717529111.png" />
                    </div>
                </div>
                <div className="CompetitionDetails_main">

                </div>
                <div className="CompetitionDetails_footer">

                </div>
            </div>
        )
    }
}

export default CompetitionDetails