import React, { Component } from 'react';
import './NumberPlate.scss'
import axios from 'axios';
import { mainUrl } from '../config';
import $ from 'jquery'
import cookie from 'react-cookies'
import { message, Button } from 'antd';

class NumberPlate extends Component {
    state = {
        NumberPlateList: [],
        Num: "---",
        value:""
    }
    async sjxr(page) {
        let { data: { data: NumberPlate } } = await axios.get(mainUrl + '/goods', {
            params: {
                gather: "NumberPlate",
                page: page,
                size: 100
            }
        });
        let NumberPlateList = NumberPlate
        this.setState({
            NumberPlateList
        })
    }
    selectChange = (event) => {
        this.setState({ value: event.target.value });
        this.sjxr(Number(event.target.value))
    };
    buyState = function (_id, State, e) {
        if (State == "false") {
            return
        } else {
            let { Num } = this.state
            Num = e.target.innerText
            this.setState({
                Num
            })

            $(".select_num li").attr("class", "")
            e.target.className = "bg_red"
            cookie.save("_id", _id)
        }
    }
    enter = async () => {
        let { Num } = this.state
        if (Num == "---") {
            message.warning('请选择号码牌！')
        } else {
            let _id = cookie.load("_id")
            $(".select_num li").attr("class", "")
            this.props.history.push(`numberplateenter/${Num}`)
            let { data } = await axios.get(mainUrl + '/goods/update', {
                params: {
                    gather: "NumberPlate",
                    _id: _id,
                    condition: "state",
                    condition_value: "false"
                }
            });
        }
    }
    componentDidMount() {
        this.sjxr(1)
    }
    render() {
        let { NumberPlateList, Num, value } = this.state
        return (
            <div className="NumberPlate">
                <div className="NumberPlate_header">
                    <div className="NumberPlate_header_top">
                        <img src="http://pics.blackbirdsport.com/stream/201703/775666_1490343821572.jpg" />
                        <p>黑鸟专属车牌</p>
                        <p>编号唯一</p>
                        <p>装X利器</p>
                    </div >
                    <div className="NumberPlate_header_center">
                        <img src="http://pics.blackbirdsport.com/stream/201703/775666_1490344728021.jpg" />
                        <p>车牌采用PVC材质</p>
                        <p>轻便，耐酸、碱，耐海水腐蚀</p>
                        <p>有橡胶弹性，不易折断 </p>
                    </div>
                    <div className="NumberPlate_header_bottom">
                        <img src="http://pics.blackbirdsport.com/stream/201805/201805031511345289785.jpeg" />
                        <p>支架升级为独立包装</p>
                        <p>橡胶绑带，弹性大，可在自行车任意部位使用 </p>
                        <p></p>
                    </div>
                    <p className="selling_price">售价28元</p>
                    <p className="include">包含支架+车牌</p>
                </div>
                <div className="NumberPlate_main">
                    <h2>注意：</h2>
                    <ul>
                        <li>车牌每人限购一个</li>
                        <li>下单后订单无法修改，请确认好信息。</li>
                        <li>下单后1小时以上未付款，订单将被取消。被选号码重新开放。</li>
                    </ul>
                </div>
                <div className="NumberPlate_footer">
                    <p className="select_title">选择号段</p>
                    <div className="NumberPlate_footer_select">
                        <select id="select" onChange={this.selectChange} value={value}>
                            <option value="1">1074~2034</option>
                            <option value="2">2343~2724</option>
                        </select>
                    </div>
                    <div className="select_num">
                        <ul >
                            {
                                NumberPlateList.map(item => {
                                    return <li key={item._id} onClick={this.buyState.bind(this, item._id, item.state)} style={item.state == "false" ? { color: "#ccc" } : { color: "black" }}>{item.num}</li>
                                })
                            }
                        </ul>
                        <p>你已选择<i>{Num}号</i></p>
                    </div>
                    <Button className="enter" onClick={this.enter}>确定</Button>
                </div>
            </div>
        )
    }
}

export default NumberPlate