import React from 'react'

import MoneyBtn from '../components/MoneyBtn';

function Money(props) {

    return (
        <div className="row money-area">
            <div className="col-3">
                <MoneyBtn amount={1} addMoney={props.addMoney} />
            </div>
            <div className="col-3">
                <MoneyBtn amount={5} addMoney={props.addMoney} />
            </div>
            <div className="col-3">
                <MoneyBtn amount={10} addMoney={props.addMoney} />
            </div>
            <div className="col-3">
                <MoneyBtn amount={20} addMoney={props.addMoney} />
            </div>
        </div >
    )
}

export default Money
