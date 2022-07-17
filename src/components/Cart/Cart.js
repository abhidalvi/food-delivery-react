import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../features/ui/uiSlice'
import './Cart.css'
import { addQuantity, subtractQuantity, clear } from '../../features/cart/cartSlice'
import { cartTotalPriceSelector } from "../../features/cart/cartSlice";
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


function Cart() {
    const cart = useSelector((state) => state.cart);
    const ui = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const totalPrice = useSelector(cartTotalPriceSelector);
    const user = useSelector((state) => state.user);
    let orders = {}
    const submitOrder = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to place the order?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: addOrder
                },
                {
                    label: 'No',
                    //onClick: () => alert('Click No')
                }
            ]
        });
    }

    const addOrder = () => {
        // let orders = []
        let ids = [];
        let item_price = 0;
        cart.map((items) => (
            item_price = (items.quantity * items.price).toFixed(2),
            orders = { id: items.id, name: items.name, quantity: items.quantity, item_price: item_price },
            ids = [...ids, orders]
        ))
        db.collection('orders').add(
            {
                uid: user.user.uid,
                email: user.user.email,
                name: user.user.displayName,
                item_ids: ids,
                order_status: "O",
                address: user.user.address,
                total_price: (totalPrice).toFixed(2),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        );
        dispatch(clear());
    }

    return (
        <>
            <div
                className={ui.cartDrawerVisible ? 'cartContainer' : 'cartContainer__transform'}>
                {cart.length > 0 ? (
                    <button
                        className="CartClearButton "
                        onClick={() => {
                            dispatch(clear());
                        }}
                    >
                        clear the cart
                    </button>
                ) : (
                    <div
                        className="EmptyCart">
                        cart is empty
                    </div>
                )}
                {cart.filter(cartItems => cartItems.quantity > 0).map(cartItem => (
                    <div
                        key={cartItem.id}
                        className="CartItem"
                    >
                        <div>
                            <div className="CartProductTitle">{cartItem.name}</div>
                            <div
                                className="CartProductSubtotal">
                                Subtotal: {(cartItem.quantity * cartItem.price).toFixed(2)}
                            </div>
                            <div className="CartProductAction">
                                <button
                                    className='ActionButton'
                                    onClick={() => {
                                        dispatch(subtractQuantity(cartItem));
                                    }}
                                >-</button>
                                <div className="CartProductQuantity">{cartItem.quantity}</div>
                                <button
                                    className="ActionButton"
                                    onClick={() => {
                                        dispatch(addQuantity(cartItem));
                                    }}
                                >+</button>
                            </div>
                        </div>
                    </div>

                ))}

                {totalPrice > 0 &&
                    <>
                        <div className="CartTotal">
                            ₹{(totalPrice).toFixed(2)}
                        </div>

                        <div>
                            <button
                                className="checkOutButton"
                                onClick={submitOrder}>Proceed to checkout</button>
                        </div>
                    </>}




            </div>

            {
                ui.cartDrawerVisible && (
                    <div className="Mask"
                        onClick={() => {
                            dispatch(toggleCart());
                        }}
                    />
                )
            }
        </>
    )
}


export default Cart