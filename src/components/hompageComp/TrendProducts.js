import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    id: 1,
    image: 'https://www.bigw.com.au/medias/sys_master/images/images/h03/h1f/9996042371102.jpg',
    title: 'Product 1',
    description: 'Description of Product 1',
    price: '$25.99',
  },
  {
    id: 2,
    image: 'https://i1.wp.com/www.mrdhukkad.com/wp-content/uploads/2019/06/8.jpg',
    title: 'Product 2',
    description: 'Description of Product 2',
    price: '$15.99',
  },
  {
    id: 3,
    image: 'https://store.hp.com/UKStore/Html/Merch/Images/c05475056_1750x1285.jpg',
    title: 'Product 3',
    description: 'Description of Product 3',
    price: '$35.99',
  },
  {
    id: 4,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6291/6291749ld.jpg',
    title: 'Product 4',
    description: 'Description of Product 4',
    price: '$45.99',
  },
  {
    id: 5,
    image: 'https://th.bing.com/th/id/OIP.3VtDOiTF8Wy1VwQwVHsDkgHaHa?rs=1&pid=ImgDetMain',
    title: 'Product 5',
    description: 'Description of Product 4',
    price: '$45.99',
  },
  {
    id: 6,
    image: 'https://www.slashgear.com/img/gallery/5-unusual-raspberry-pi-projects-found-in-the-wild/l-intro-1683510614.jpg',
    title: 'Product 6',
    description: 'Description of Product 4',
    price: '$45.99',
  },
  // Add more products here as needed
];

const ProductsList = () => {
  return (
    <div className="container py-5">
      <h2 className="text-info">Top offered products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
            <img src={product.image} alt={product.title} className="w-40 h-30 object-cover card-img-top" />

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h5 className="text-primary">{product.price}</h5>
              </div>
              <div className="card-footer text-center">
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
