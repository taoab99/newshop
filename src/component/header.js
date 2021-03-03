import React, { Component } from 'react';
import Timkiem from './timkiem';
import Lienhe from './lienhe';
import Loggo from './logo';

class Header extends Component {
    render() {
        const { show } = this.props;
        return (
            <div className="navv width">
                <div className="list-items width he">
                    <Loggo />
                    <Timkiem />
                    <Lienhe show = {show} />
                </div>
            </div>

        );
    }

}

export default Header;
