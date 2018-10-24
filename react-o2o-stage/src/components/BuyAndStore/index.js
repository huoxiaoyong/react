import React from 'react';
import "./style.less"

export default class BuyAndStore extends React.Component {

    storeClickHandle(){

    }

    buyClickHandle(){

    }

    render(){
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                </div>
                <div className="item-container float-right">
                  <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
}