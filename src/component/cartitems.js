import React, { Component } from 'react';
class Cartitem extends Component {
    
    render() {
        const { items, ondelete, onupdatenumber } = this.props;
        var hang = <div> <h2>giỏ hàng trống !</h2></div>;
        if (items.length > 0) {
            hang = items.map((item, index) => {
                return (
                    <div className="sanpham" key={index}>
                        <div className="sanpham-img">
                            <img src={item.url} alt={item.name} />
                        </div>
                        <div className="sanpham-control">
                            <table>
                                <tbody>
                                    <tr>
                                        <td> giá</td>
                                        <td> số lượng</td>
                                        <td>
                                            tổng tiền</td>
                                        <td>
                                            xóa sp
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{item.price}</td>

                                        <td> {item.qualtity} </td>
                                        <td>
                                            {this.thanhtien(item.price, item.qualtity)} $
                                        </td>
                                        <td>
                                            <span onClick={() => onupdatenumber(item, -1)}>-</span>
                                            <span onClick={() => onupdatenumber(item, 1)}>+</span>
                                            <button onClick={() => ondelete(item.id
                                            )} >xóa</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                );
            });
        }
        return (
            <div className="listcart">
                <div className="itemscart">
                    <div style={{ width: 100 + "%" }}>
                        <div>
                            {hang}
                        </div>

                    </div>
                </div>
                <div className="tinhtien">
                    <h2>tổng giỏ hàng: {
                        this.tinhtongtien(items)
                    }
                        $
                    </h2>
                </div>




            </div>

        );
    }
    thanhtien = (price, soluong) => {
        var totol;
        return totol = price * soluong;
    };
    tinhtongtien = (cart) => {
        let i = 0;
        let summoney = null;
        if (cart.length > 0) {
            for (i; i < cart.length; i++) {
                summoney += cart[i].price * cart[i].qualtity;
            }
        }
        return summoney;
    }

}

export default Cartitem;
