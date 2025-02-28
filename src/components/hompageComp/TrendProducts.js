import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculatorImg from '../assets/products/calculator.png';
import laptotImg from '../assets/products/laptop.png';
import mobileImg from '../assets/products/phone.png';
import bagImg from '../assets/products/bag.png';
import arduinoImg from '../assets/products/arduino.png';
import bookImg from '../assets/products/book.png';

const products = [
  {
    id: 1,
    image: calculatorImg,
    title: 'Calculator',
    description: 'latest version casion calulator',
    price: 'RS . 200',
  },
  {
    id: 2,
    image: bookImg,
    title: 'richdad poordad ',
    description: 'secondhand famous book',
    price: 'RS . 100',
  },
  {
    id: 3,
    image: laptotImg,
    title: 'Hp laptop',
    description: 'second hand laptop',
    price: 'RS . 20000',
  },
  {
    id: 4,
    image: mobileImg,
    title: 'Mobile',
    description: 'less used mobile',
    price: 'RS . 1000',
  },
  {
    id: 5,
    image: bagImg,
    title: ' Laptop bag',
    description: 'good condition bag',
    price: 'RS . 150',
  },
  {
    id: 6,
    image: arduinoImg,
    title: 'arduino project',
    description: 'arduino automation project',
    price: 'RS . 100',
  },
  // Add more products here as needed
];

const ProductsList = () => {
  return (
    <div className="container py-5 ">

      <h2 className="text-info">Top offered products</h2>
      <div className="row ">
        {products.map((product) => (
          <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card shadow-sm h-100 ">
            <img src={product.image} alt={product.title} className="w-40 h-30 object-cover card-img-top" />

              <div className="card-body  ">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h5 className="text-primary">{product.price}</h5>
              </div>
              <div className="card-footer text-center custom-button-bg">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
