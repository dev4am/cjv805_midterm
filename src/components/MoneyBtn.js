import React from 'react'

function MoneyBtn(props) {

    const clickHandler = (e) => {
        props.addMoney(props.amount);
    }

    return (
        <button onClick={clickHandler} className="btn col-12 btn-primary money-btn">${props.amount}</button>
    )
}

export default MoneyBtn
