 import { useState, useEffect } from "react";
import { data } from "react-router-dom";


async function fetch_catagories(){
// {
//   "Spends": [
//     {
//       "id": 1,
//       "text": "Перевод"
//     }
//   ],
//   "Income": [
//     {
//       "id": 1,
//       "text": "ЗП"
//     }
//   ]
// }
    let url_ = '/app/api/catagories'
    let income = []
    let spends = []
    try{
        const response = await fetch(url_);
    
    const data = await response.json();
    return {
        income:data.Income,
        spends:data.Spends,
    }
    }
    catch{}

}

function Add_income(){
    let catagories = await fetch_catagories();
    let catagories = catagories.income;
    const [amount,setAmount] = useState('')
    const [catagory,setCatatory] = useState('')

    const handled = (e) =>{

        const data = {
            amount: amount,
            catagory: catagory
        }


        fetch('app/api/recieve_data',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        alert("SAVED!")
    }
    return(
        <>
        <div className="catagories">
            <p className="catagories-text">Available catagories to income</p>
            {catagories.map((item,index) => (
                <p className="catagories-text">{item}</p>
            ))}

        </div>
        <form className="fancy-form" onSubmit={handled}>
            <input className="form-input" type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <input type="date" id="date" name="date"/>
            <select className="form-select" value={catagory} onChange={(e) =>setCatatory(e.target.value)}>{catagories.map((cat,index) => (<option value={cat} key={index}>{cat}</option>))}</select>
            <button className='form-button'  type="submit">Save</button>
        </form>
        </>
    )


}

 function Add_spends(){

    
    let catagories = await fetch_catagories();
    let catagories = catagories.spends;
   
   const [amount,setAmount] = useState('')
   const [catagory,setCatatory] = useState('')

   const handled = (e) =>{
        const data = {
            amount: amount,
            catagory: catagory
        }
        fetch('app/api/recieve_data',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        alert("SAVED!")
    }
    
    return(
        <>
        <div className="catagories">
            <p className="catagories-text">Available catagories to spends</p>
            {catagories.map((item,index) => (
                <p className="catagories-text">{item}</p>
            ))}

        </div>
        
      
        <form className="fancy-form" onSubmit={handled}>
            <input className="form-input" type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <input type="date" id="date" name="date"/>
            <select className="form-select" value={catagory} onChange={(e) =>setCatatory(e.target.value)}>{catagories.map((cat,index) => (<option value={cat} key={index}>{cat}</option>))}</select>
            <button className='form-button'  type="submit">Save</button>
        </form>
        </>
    );
}


function App_add(){
    return(
        <>
            <Add_spends/>
            <Add_income/>
        </>
    );

}
export default App_add;