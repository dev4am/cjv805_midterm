import React from 'react'

function NumBtn(props) {

    const isSelected = props.nums.includes(props.num);

    const clickHandler = () => {
        if(isSelected){
            props.removeNum(props.num);
        }else{
            props.addNum(props.num);
        }
    }

    return (
        <button onClick={clickHandler} className={isSelected?"btn col-12 btn-warning num-btn-selected":"btn col-12 btn-outline-warning"}>{props.num}</button>
    )
}

export default NumBtn
