import React from 'react'

function Ticket(props) {
    return (
        <div className="ticket position-relative">
            <div>Number selected:</div>
            <div>
                {
                    props.nums.map((n)=>{
                        return (
                            <div key={n} className="border ticket-num-btn">{n}</div>
                        )
                    })
                }
            </div>

            <div className="position-absolute bottom-0">Total: ${props.money}</div>
        </div>
    )
}

export default Ticket
