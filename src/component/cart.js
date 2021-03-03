import React, { Component } from 'react';
import Numbercontex from '../contex/numbercontex';
import Cartitem from './cartitems';
class Cart extends Component {
    render() {
        return (
            <Numbercontex.Consumer >
                {({ cart, ondelete, onupdatenumber}) =>
                    <Cartitem items={cart} ondelete={ondelete} onupdatenumber={onupdatenumber} />
                }
            </Numbercontex.Consumer>
        );
    }
    
}

export default Cart;
