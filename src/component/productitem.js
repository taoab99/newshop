import React, { Component } from 'react';
import Numbercontex from '../contex/numbercontex';
class Productitem extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className="items">
                <div className="box-item">
                    <div className="item-img">
                        <img
                            src={items.url}
                            alt={items.name}
                        />
                    </div>
                    <div className="items-caption">
                        <p>{items.name}</p>
                        <p>{items.price}đ</p>
                        <Numbercontex.Consumer>
                            {
                                ({ adtocart }) => <button className="btn-warning" onClick={() => adtocart(items, 1)}>add to card</button>
                            }
                        </Numbercontex.Consumer>
                        

                    </div>
                </div>
            </div>
        );
    }

}

export default Productitem;
