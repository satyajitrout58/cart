import React from 'react';
import {Link} from 'react-router-dom'
import Nav from './Nav'
import Slide from '../asset/slide.png';
import Product from './Product';

const Home = () => {
    return (
        <div className='container'>
            <Nav />
            <img src={Slide} alt="Slide" className='slide' />
            <Product />
        </div>
    )
}

export default Home;