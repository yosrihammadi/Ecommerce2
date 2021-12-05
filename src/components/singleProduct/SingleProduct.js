import React from "react";
import {useParams} from "react-router-dom";
import './SingleProduct.style.css'

import {Color} from '../../ui'
import {products} from "../../data";

const SingleProduct = () => {
  const {id} = useParams();
  
  const product = products.filter(p => p.id === id)

  const colors = ['tomato', 'cornflowerblue', 'cadetblue']

  return (
    <section id="product">
      <div className="product container">
        <div className="product__path">
          <a href="" className="product__path-link">home</a>
          <span className="product__path-link">/</span>
          <a href="" className="product__path-link">products</a>
          <span className="product__path-link">/</span>
          <a href="" className="product__path-link">Skinny jeans limited edition</a>
        </div>
        <div className="product__content">
          <div className="product__content__block">
            <div className="product__content__block__img">
              <img src="https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_mock_neck_bodysuit-12_1800x1800.jpg?v=1636772362" alt=""/>
            </div>
          </div>
          <div className="product__content__block">
            <div className="product__content__block__row">
              <h3 className="product__content__block__row-title">
                {product.title}
              </h3>
              <p className="product__content__block__row-price">
                $ {product.price}
              </p>
            </div>
            <div className="product__content__block__row">
              <p className="product__content__block__row-filter">
                color
              </p>
              <div className="colors">
                {colors.map((color, idx) => <Color key={idx} color={color} />)}
              </div>
            </div>
            <div className="product__content__block__row">
              <p className="product__content__block__row-filter">
                size
              </p>
              <div className="size__buttons">
                <button className="btn-size active">Small</button>
                <button className="btn-size">Medium</button>
                <button className="btn-size">Large</button>
              </div>
            </div>
            <div className="product__content__block__row">
              <button className="btn-add-to-cart">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct