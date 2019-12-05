import React, { Component } from 'react';
import { Result, Button } from 'antd';

class NumberPlateEnter extends Component {
    
    render() {
        let { id } = this.props.match.params
        return (
            <div>
                <Result
                    status="success"
                    title={`你已成功选择${id}号码牌!`}
                    subTitle="凭此资格券，到黑鸟单车-积分商城购买号码牌."
                    extra={[
                        <Button type="primary" key="console" onClick={()=>{
                            this.props.history.goBack()
                        }}>
                            返回
                        </Button>
                    ]}
                />
            </div>
        )
    }
}

export default NumberPlateEnter