import React from 'react';

const Services = () => {
    return (
        <section className="clean-block features">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Services</h2>
                    <h4>What you need?</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>Freelancing</h4>
                        <p>Freelancing allows individuals to work independently on projects across various fields such as writing, design, programming, marketing, and more. It provides flexibility, the opportunity to work with global clients, and the ability to set your own rates. Whether you're a beginner looking to gain experience or an expert seeking diverse projects, freelancing opens doors to numerous opportunities.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>Marketplace</h4>
                        <p>A marketplace is a platform where buyers and sellers connect to exchange goods or services. Whether it's physical products, digital assets, or specialized services, an online marketplace provides a space for businesses and individuals to showcase their offerings. It facilitates transactions, ensures secure payments, and helps users reach a broader audience.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>Student communites and groups</h4>
                        <p>Student communities and groups bring together learners with shared interests, academic goals, or professional aspirations. These groups provide a space for discussions, knowledge-sharing, networking, and collaboration on projects. They can help students enhance their skills, stay updated with industry trends, and create valuable connections for the future.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>Carier guidence</h4>
                        <p>Career guidance offers expert advice and resources to help individuals make informed career decisions. It includes resume building, interview preparation, skill development, and mentorship programs. Whether you’re a student exploring career options or a professional looking to switch fields, career guidance can provide the support needed to achieve your goals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;