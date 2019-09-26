import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            
                <header className="App-header">
                    <h1>Pet Hotel</h1>
                    <Link 
                        className="nav-link"
                        to="/pets"
                    >
                        Pets
                    </Link>
                    <Link
                        className="nav-link"
                        to="/owners"
                    >
                        Owners
                    </Link>
                </header>
        );
    }
}

export default Header;
