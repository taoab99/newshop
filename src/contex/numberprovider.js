import React, { Component } from 'react';
import Numbercontex from './numbercontex';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart:[]
        }
        this.adtocart = this.adtocart.bind(this);
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('task')){
          var taa = JSON.parse(localStorage.getItem('task'));
    
          this.setState({
            cart: taa
          })
        }
      }
    adtocart = (items, qualtity) => {
        const cloneData = [...this.state.cart];
        const data = {
            ...items,
            qualtity: qualtity
        }
        var index = this.findeindex(this.state.cart, items.id)
        if (index !== -1) {
            // dax cos trong car thi tang count
            cloneData[index] = {
                ...cloneData[index],
                qualtity: cloneData[index].qualtity + qualtity
            }
            this.setState({
                cart: cloneData
            })
        } else {
            cloneData.push(data);
            this.setState({
                cart:cloneData
            })
        }
        localStorage.setItem('task', JSON.stringify(cloneData));
    }
    xoasanpham = (id) => {
        const cloneData = [...this.state.cart];
        const data = cloneData.filter((item, index) => {
            return item.id !== id
        });
        this.setState({
            cart: data
        })
        localStorage.setItem('task', JSON.stringify(data));
    }
    tangsoluong = (items, number) => {
        var index = this.findeindex(this.state.cart, items.id)
        const cloneData = [...this.state.cart];
        cloneData[index] = {
            ...cloneData[index],
            qualtity: cloneData[index].qualtity + number
        }
        if (cloneData[index].qualtity > 0) {
            this.setState({
                cart: cloneData
            }
            )
        }

    }
    findeindex = (cart, id) => {
        var index = -1;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id === id) {
                    index = i;
                }
            }
        }
        return index;

    }
    render() {
        return (
            <Numbercontex.Provider
                value={
                    {
                        cart: this.state.cart,
                        adtocart: this.adtocart,
                        ondelete: this.xoasanpham,
                        onupdatenumber: this.tangsoluong
                    }
                }
            >
                {this.props.children}
            </Numbercontex.Provider>
        );
    }

}