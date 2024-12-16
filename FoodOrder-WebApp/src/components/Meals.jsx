import { useContext, useEffect,useState } from "react"
import {currencyFormatter} from '../util/formatting.js'
import Button from "./UI/Button.jsx";
import CartContext from '../Store/CartContext.jsx';
export default function Meals()
{
    const [loadedMeals,setLoadedMeals]=useState([]);
    useEffect(
        ()=>{
            async function fetchMeals()
            {
                try {
                     const response=await fetch('http://localhost:3000/meals');
                        if(!response.ok)
                        {
                            throw new Error('Failed to fetch meals');
                        }
                        const meals=await response.json(); 
                        setLoadedMeals(meals);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchMeals(); 
    },[]);
    const cartCtx=useContext(CartContext);
    function handleAddmealToCart(meal)
    {
        cartCtx.addItem(meal);
    }
    return (
        <ul id="meals">
            {loadedMeals.map((meal)=>(
                <li key={meal.id} className="meal-item">
                    <article>
                        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                        <div>
                            <h3>{meal.name}</h3>
                            <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                            <p className="meal=item-description">{meal.description}</p>
                        </div>
                        <p className="meal=item-actions">
                            <Button onClick={()=>handleAddmealToCart(meal)}>Add to Cart</Button>
                        </p>
                    </article>
                </li>
            ))}
        </ul>
    );
}