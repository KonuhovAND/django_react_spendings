import { useState, useEffect } from "react";
//TODO:переделать fetch на то что мы используем
// ну короче, нужно управлять категориями, добавлять это точно
// но удалять хз, если я чето добавил, скорее всего легче просто удалить трату из бд
// а тут только работать с категориями которые есть(добавлять в разные короче)
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

function Catagories(){
    const [catagories_income,setCategoriesIncome] = useState([])
    const [catagories_spend,setCategoriesSpend] = useState([])

    const [category_spend,setCategorySpend] = useState('')
    const [category_income,setCategoryIncome] = useState('')

    let url_ = 'http://localhost:8000/app/api/categories'
    let url_POST = 'http://localhost:8000/app/api/recieve_categories'

    let loadCategories = () =>{
        fetch(url_)
        .then((r) => r.json())
        .then((d) => {
            setCategoriesIncome(d.category_income)
            setCategoriesSpend(d.category_spend)
    })
    };
    useEffect(() => {loadCategories();},[]);

    const handleRequest =(e,type)=> {
        e.preventDefault()
        const text = type == 'spend' ? category_spend : category_income;
        let data = {
            text:text,
            type:type,
        }
        
        fetch(url_POST,{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) =>{
            loadCategories();
            if (type === 'spend') setCategorySpend('');
            else setCategoryIncome('');
        })

    } 
    return(
        <>
        <div className="catagories" >
            <p className="catagories-text">Available catagories to spendings</p>
            {catagories_spend.map((item) => (
                <p key ={item.id}className="catagories-text">{item.text}</p>
            ))}
            <form className="fancy-form" onSubmit={(e) => handleRequest(e,'spend')}>
                <input className="form-input" type="text" value={category_spend} onChange={(e) => {setCategorySpend(e.target.value)}} />
                <button className='form-button'  type="submit">Save</button>
            </form>
        </div>
        
        <div className="catagories">
            <p className="catagories-text">Available catagories to income</p>
            {catagories_income.map((item) => (
                <p key ={item.id}className="catagories-text">{item.text}</p>
            ))}
            <form className="fancy-form" onSubmit={(e) => handleRequest(e,'income')}>
                <input className="form-input" type="text" value={category_income} onChange={(e) => {setCategoryIncome(e.target.value)}} />
                <button className='form-button'  type="submit">Save</button>
            </form>
        </div>


        </>
    );
}
export default Catagories;