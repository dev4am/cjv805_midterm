import React from 'react'

import NumBtn from '../components/NumBtn';

function Num(props) {

    let cashBtnDisabled = "disabled";
    if(props.nums.length===5 && props.money>0){
        cashBtnDisabled = "";
    }

    return (
        <div>
            <div className="row">
                {
                    [...Array(5).keys()].map((n)=>{
                        return (
                            <div key={n+1} className="col num-btn-conatiner">
                                <NumBtn num={n+1} nums={props.nums} addNum={props.addNum} removeNum={props.removeNum}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                {
                    [...Array(5).keys()].map((n)=>{
                        return (
                            <div key={n+6} className="col num-btn-conatiner">
                                <NumBtn num={n+6} nums={props.nums} addNum={props.addNum} removeNum={props.removeNum}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                {
                    [...Array(5).keys()].map((n)=>{
                        return (
                            <div key={n+11} className="col num-btn-conatiner">
                                <NumBtn num={n+11} nums={props.nums} addNum={props.addNum} removeNum={props.removeNum}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                {
                    [...Array(5).keys()].map((n)=>{
                        return (
                            <div key={n+16} className="col num-btn-conatiner">
                                <NumBtn num={n+16} nums={props.nums} addNum={props.addNum} removeNum={props.removeNum}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col num-btn-conatiner">
                    <button onClick={props.randomNum} className="btn btn-lg col-12 btn-success">Random</button>
                </div>
                <div className="col num-btn-conatiner">
                    <button onClick={props.clearNumAndMoney} className="btn btn-lg col-12 btn-success">Clear</button>
                </div>
                <div className="col num-btn-conatiner">
                    <button className="btn btn-lg col-12 btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={cashBtnDisabled}>Cash</button>
                </div>
            </div>
        </div>
    )
}

export default Num
