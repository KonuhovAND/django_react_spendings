 import { useState, useEffect } from "react";
import { data } from "react-router-dom";

 
function Add_action(catagories,income){
    const [amount, catagory,url_,setAmount,setCatatory] = useState('')
    const handled = (e) =>{
        e.preventDefault()
        const data = {
            amount: amount,
            catagory: catagory
        }
        if (catagory in catagories){url_ ='api/spend/'}
        if (catagory in income){url_ ='api/income/'}
        fetch(url_,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        alert("SAVED!")
    }
    return(
        <form onSubmit={handled}>
            <input type="number" value={amount} placeholder="Amount" ></input>
        </form>
    )
}

 function Add(){
    // const [catagories, setData] = useState(null);
    // useEffect(() => {
    // // Fetch data from the Django server URL
    // fetch('http://127.0.0/api/data/catagories')
    //   .then(response => response.json())
    //   .then(catagories => setData(data))
    //   .catch(error => console.error('Error fetching data:', error));
    // }, []);

   const catagories = ['apple','apple2','apple3'] 
   const income = ['income','income2','income3']
    return(
        <>
        <div className="catagories">
            <p className="catagories-text">Available catagories to spends</p>
            {catagories.map((item,index) => (
                <p className="catagories-text">{index} - {item}</p>
            ))}
            <select>
                {catagories.map((item) => (
                    <option>{item}</option>
                ))}
            </select>

        </div>
        
        <div className="catagories">
            <p className="catagories-text">Available catagories to income</p>
            {income.map((item,index) => (
                <p className="catagories-text">{index} - {item}</p>
            ))}

        </div>
        </>
    );
}
export default Add;