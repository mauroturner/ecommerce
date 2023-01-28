import React from "react";
import Logo from './img/logo.png'

const CartWidget = () => {
    return (
        <div>
            <img src={Logo} alt="Ecommerce" style={{ width: 120 + 'px' }}/>
        </div>
    );
};

export default CartWidget;