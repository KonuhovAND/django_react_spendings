 import { useState, useEffect } from "react";
import { data } from "react-router-dom";

// TODO: добавить дату  
function Add_income(){
    let catagories = ['cat_inc1'];
    const [amount,setAmount] = useState('')
    const [catagory,setCatatory] = useState('')
    let url_ =''
    const handled = (e) =>{

        const data = {
            amount: amount,
            catagory: catagory
        }

        url_ = 'app/api/catagories'
        
        fetch(url_,{
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
    let catagories = [
        'cat_name',
        'cat_name1',
        'cat_name2'
    ]
   
   const [amount,setAmount] = useState('')
   const [catagory,setCatatory] = useState('')
   let url_ =''

   const handled = (e) =>{
        const data = {
            amount: amount,
            catagory: catagory
        }
        url_ = 'app/api/catagories'
        fetch(url_,{
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