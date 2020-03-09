import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='topNav'>
            <Link className="active link" to="#home">Home</Link>
            <Link className="link">Category</Link>
            <div class="dropdown">
                <button class="dropbtn">Dropdown
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <div>
                        <a href="#">Link 1</a>
                    </div>
                    <div>
                        <a href="#">Link 2</a>
                    </div>
                    <div>
                        <a href="#">Link 3</a>
                    </div> 
                    <div>
                        <a href="#">Link 4</a>
                    </div>
                </div>
            </div>
            <Link className="link" to="#contact">Contact</Link>
            <Link className="link" to="#about">About</Link>
            <div class="topnav-right">

                <Link className="link" href="#search">
                    User
                    <i className="fa fa-user mg-l"></i>
                </Link>
                <Link className="link" href="#about">
                    Cart
                    <i className="fa fa-shopping-cart mg-l"></i>
                    <i className="fa fa-caret-down mg-l"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;