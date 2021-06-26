import React, { useState } from 'react'
import './assets/css/App.css';
import Money from './components/Money';
import Num from './components/Num';
import Ticket from './components/Ticket';

function App() {

  const [nums, setNums] = useState([]);
  const [money, setMoney] = useState(0);

  const addNum = (n) => {
    if (nums.length === 5) {
      alert("Can not select more number.")
      return false;
    }
    if (nums.includes(n)) {
      return false;
    }
    setNums([...nums, n].sort((a, b) => a - b));
    return true;
  }

  const removeNum = (n) => {
    if (nums.length === 0 || !nums.includes(n)) {
      return false;
    }
    setNums(nums.filter((value) => {
      return value !== n;
    }));
    return true;
  }

  const handleClear = () => {
    setNums([]);
    setMoney(0);
  }

  const addMoney = (amount) => {
    if (nums.length !== 5) {
      alert("Please select 5 number first.");
      return;
    }
    setMoney(money + amount);
  }

  const randomNum = () => {
    let randomNums = [];
    while (randomNums.length < 5) {
      let ran = Math.floor(Math.random() * 20) + 1;
      if (randomNums.includes(ran)) {
        continue;
      }
      randomNums.push(ran);
    }
    setNums(randomNums.sort((a, b) => a - b));
  }

  return (
    <div className="container border border-dark fixed-width">
      <div className="row border-bottom border-dark header">WHE WHE</div>
      <div className="row">
        <div className="col border-end border-dark">
          <div className="row border-bottom border-dark num-area">
            <div className="col">
              <Num nums={nums} money={money} addNum={addNum} removeNum={removeNum} clearNumAndMoney={handleClear} randomNum={randomNum} />
            </div>
          </div>
          <div className="row money-area">
            <Money addMoney={addMoney} />
          </div>
        </div>
        <div className="col-4 ticket-area">
          <Ticket nums={nums} money={money} />
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">WHE WHE Ticket</h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <h3>Numbers selected:</h3>
                {
                    nums.map((n)=>{
                        return (
                            <div key={n} className="border ticket-num-btn">{n}</div>
                        )
                    })
                }
                <h3>Money assigned: ${money}</h3>
            </div>
            <div className="modal-footer">
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
