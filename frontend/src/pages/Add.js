 import { useState, useEffect } from "react";
import { data } from "react-router-dom";

 

 function Add(){
    // const [catagories, setData] = useState(null);
    // useEffect(() => {
    // // Fetch data from the Django server URL
    // fetch('http://127.0.0/api/data/catagories')
    //   .then(response => response.json())
    //   .then(catagories => setData(data))
    //   .catch(error => console.error('Error fetching data:', error));
    // }, []);

    let catagories = {
        'cat_name':true,
        'cat_name1':false,
        'cat_name2':true,
        'cat_name3':false,

    }

   const [amount,setAmount] = useState('')
   const [catagory,setCatatory] = useState('')
   let url_ =''
   const all_cat = [...catagories,...income]

   const handled = (e) =>{
        const data = {
            amount: amount,
            catagory: catagory
        }
        if (catagories.includes(catagory)){url_ ='api/spend/'}
        if (income.includes(catagory)){url_ ='api/income/'}
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
        
        <div className="catagories">
            <p className="catagories-text">Available catagories to income</p>
            {income.map((item,index) => (
                <p className="catagories-text">{item}</p>
            ))}

        </div>
        <form className="fancy-form" onSubmit={handled}>
            <input className="form-input" type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <select className="form-select" value={catagory} onChange={(e) =>setCatatory(e.target.value)}>{all_cat.map((cat,index) => (<option value={cat} key={index}>{cat}</option>))}</select>
            <button className='form-button'  type="submit">Save</button>
        </form>
        </>
    );
}
export default Add;