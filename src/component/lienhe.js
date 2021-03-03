import React, { Component } from 'react';
import Numbercontex from '../contex/numbercontex';
class Lienhe extends Component {
    isshow=()=>{
        this.props.show();
    }
    render() {
        return (
            <div className="lienhe">
                <div className="navbar">
                    <ul className="nav navbar-nav width">
                        <li className="active">
                            <a href="#">Loggin</a>
                        </li>
                        <li >
                            <Numbercontex.Consumer >
                                {({cart}) => <a href="#" onClick = {this.isshow}>Cart({cart.length})</a>}
                            </Numbercontex.Consumer>
                            
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Lienhe;
