import React, { Component } from 'react';
import { Card } from 'antd';
import './Competition.scss'

class Competition extends Component {
    render() {
        return (
            <div id="competition">
                <div className="competition_list" style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <img src=""/>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Competition