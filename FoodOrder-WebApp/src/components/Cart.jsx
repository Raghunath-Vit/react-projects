import { useContext } from "react"
import {currencyFormatter} from '../util/formatting'
import Button from './UI/Button';
export default function Cart()
{

    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>{totalPrice+item.quantity*item.price},0)

    const cartCtx=useContext(CartContext);
    return <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item)=>(<li key={item.id}>{item.name}-{item.quantity}
            </li>
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="model-actions">
            <Button textOnly>Close</Button>
            <Button>Go To CheckOut</Button>
        </p>
    </Modal>
}