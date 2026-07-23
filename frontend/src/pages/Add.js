 import { useState, useEffect } from "react";
import { data } from "react-router-dom";
//TODO: передаелть на сбор данных который мы используем
// {
//   "meta": {
//     "limit": 20,
//     "next": null,
//     "offset": 0,
//     "previous": null,
//     "total_count": 1
//   },
//   "objects": [
//     {
//       "id": 1,
//       "resource_uri": "/fake_api/categories/1/",
//       "text": "Перевод"
//     }
//   ]
// }

function Add_income(){
    const [amount,setAmount] = useState('')
    const [catagory,setCategory] = useState('')
    const [catagories,setCategories] = useState([])
    const [date, setDate] = useState(new Date());
    const [text,setText] = useState('')




    let url_ = 'http://localhost:8000/app/api/categories'
    useEffect(() =>{
        fetch(url_)
        .then((r) => r.json())
        .then((d) => setCategories(d.category_income))
    },[]);
    const handleRequest = (e) =>{

        const data = {
            amount: amount,
            catagory: catagory,
            text: text,
            date:date,
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
            {catagories.map((item) => (
                <p key ={item.id}className="catagories-text">{item.text}</p>
            ))}

        </div>
        <form className="fancy-form" onSubmit={handleRequest}>
            <input className="form-input" type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <input className="form-input" placeholder="Enter text to spending" type='text' name='text' onChange={(e) => setText(e.target.value)}/>
            <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)}/>
            <select className="form-select" value={catagory} onChange={(e) =>setCategory(e.target.value)}>{catagories.map((cat) => (<option value={cat.text} key={cat.id}>{cat.text}</option>))}</select>
            <button className='form-button'  type="submit">Save</button>
        </form>
        </>
    )


}

 function Add_spends(){
    const [amount,setAmount] = useState('')
    const [catagory,setCategory] = useState('')
    const [catagories,setCategories] = useState([])
    const [date, setDate] = useState(new Date());
    const [text,setText] = useState('')


    let url_ = 'http://localhost:8000/app/api/categories'
    useEffect(() =>{
        fetch(url_)
        .then((r) => r.json())
        .then((d) => {
            console.log("DATA:", d);  // SEE WHAT YOU GET
            setCategories(d.category_spend)})
    },[]);
       
   const handleRequest = (e) =>{
        const data = {
            amount: amount,
            catagory: catagory,
            text: text,
            date:date,
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
            {catagories.map((item) => (
                <p key={item.id} className="catagories-text">{item.text}</p>
            ))}

        </div>
        
      
        <form className="fancy-form" onSubmit={handleRequest}>
            <input className="form-input" type="number" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            <input className="form-input" placeholder="Enter text to spending" type='text' name='text' onChange={(e) => setText(e.target.value)}/>
            <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)}/>
            <select className="form-select" value={catagory} onChange={(e) =>setCategory(e.target.value)}>{catagories.map((cat) => (<option value={cat.text} key={cat.id}>{cat.text}</option>))}</select>
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