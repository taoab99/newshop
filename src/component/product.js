import React, { Component } from 'react';
import Productitem from './productitem';
class Product extends Component {
    render() {
        var { product } = this.props;
        var tarks = '';
        if(product){
            tarks = product.map((items, index) =>{
                return(
                    <Productitem items={items} key={index} />
                )
            });
        }

        return (
            <div className="conten width">
                <div className="box width">
                    <div className="list-items width">
                        { tarks }
                    </div>
                </div>
            </div>
        );
    }

}

export default Product;

