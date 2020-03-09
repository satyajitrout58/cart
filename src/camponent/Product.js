import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import productImg from '../asset/product.jpg';
import {connect } from 'react-redux';

const Product = (props) => {
    const productList = () => {
            console.log(props);
            const { product } = props;
            const productList = product.map((val) => {
                return (
                    <div className='col-4'>
                        <div className="gallery">
                            <a target="_blank" href={productImg}>
                                <img src={productImg} alt="Product Image" />
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>
                )
            })
            return productList;
    }
    return (
        <Fragment>
            <h2 className='ProductHead'>
                Product Section
            </h2>
            <div className='row'>
                {productList()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);