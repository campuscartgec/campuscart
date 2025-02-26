import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../assets/img/scenery/image1.jpg';
import image4 from '../assets/img/scenery/image4.jpg';
import image6 from '../assets/img/scenery/image6.jpg';


function Trending() {
    return (
        <section className="clean-block slider dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Trending now</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="w-100 d-block" src={image1} alt="Slide Image" /></div>
                        <div className="carousel-item"><img className="w-100 d-block" src={image4} alt="Slide Image" /></div>
                        <div className="carousel-item"><img className="w-100 d-block" src={image6} alt="Slide Image" /></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
                </div>
            </div>
        </section>
    );
}

export default Trending;